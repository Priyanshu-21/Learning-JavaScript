// Adding controller sigin & signup with database connection
import express from 'express'; 
import mongoose from 'mongoose'; 
import { } from 'dotenv/config'; 
import zod from 'zod'; 
import userSchema from './userModel.js'; 

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
                msg: "There is some issue in validation"
            }); 
            return; 
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

    app.listen(3000); 

} catch(err) {
    throw new err; 
}

// Next Task: - Add JWT & give token to sessions | user exist then sigup with other username
