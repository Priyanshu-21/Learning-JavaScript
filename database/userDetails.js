// Adding controller sigin & signup with database connection
import express from 'express'; 
import mongoose from 'mongoose'; 
import { } from 'dotenv/config'; 
import zod from 'zod'; 
import userSchema from './userModel.js'; 
import createToken from './jwtSign.js';
import validateToken from './middleware.js';

const app = express(); 

// Defining the structure of userDetails 
const userDetails = zod.object({
    username: zod.string().min(3).max(6), 
    email: zod.string().email(), 
    password: zod.string().min(6).max(10), 
}); 

app.use(express.json()); // Application Middleware

try {
    // Database connection 
    const db = mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.j0sx7.mongodb.net/`); 

    const users = mongoose.model('users', userSchema); // make a collection (table)

    // Controller 
    app.post('/signup', async function (req, res) {
        
        const {username, email, password} = req.body;  

        // Zod validation 
        const validation = userDetails.safeParse({username, email, password}); 

        if(!validation.success) {
            res.status(400).json({
                msg: "There is some issue in validation",
                error: validation.error.issues
            }); 
            return; 
        }
        const userExists = await users.findOne({username}); 

        if(userExists) {
            // Username exists in database 
            return res.status(200).json({
                msg: "Hey! sorry username is already taken, try with other username", 
            })
        }
        const saveData = new users({
            username, 
            email, 
            password, 
        }); 

        // save data of users 
        await saveData.save(); 

        res.status(200).json({
            msg: "User has been successfully Signed Up", 
        }); 
    });
    
    // SignIn controller 
    app.get('/login', async function (req, res) {

        const { username, password } = req.body; 

        const validation = userDetails.safeParse({username, password});

        // Verify that user have login creds or not
        const verifyUser = await users.findOne({username}); 
        const verifyPassword = await users.findOne({password}); 

        if(!(verifyUser && verifyPassword)) {
            res.status(404).json({
                msg: "Username and password is Incorrect. Please check once", 
            }); 

            return; 
        }

        // Create Session token for that user (JWT method)
        const createSession = createToken({username: username}); 

        res.status(200).json({
            msg: "You have successfully logged in",
            jwtToken: createSession,  
        })
    }); 

    // Verify JWT token with Session details 
    app.get('/getUser', validateToken, function (req, res) {

        res.status(200).json({
            msg: "Congrats, you have access for this page", 
            payload: global.userPayload, 
        });

    });

    app.listen(3000); 

} catch(err) {
    throw new err; 
}

// After validation of token: - Server is in hung state, need to check on this. 
