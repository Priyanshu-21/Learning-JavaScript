// Create a basic SignUp & SignIn controller with DB Schema's
import express from 'express'; 
import mongoose from 'mongoose';
import userSchema from './userModel.js';
import { } from 'dotenv/config'; 

const app = express(); 

app.use(express.json()); 

try {

    // Define connection String 
    const db = mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.j0sx7.mongodb.net/`); 

    // Define Model
    const users = mongoose.model('user', userSchema); 

    // Controller 
    app.post('/signup', async function (req, res) {
        const username = req.body.username; 
        const email = req.body.email; 
        const password = req.body.password; 

        // save the data in user Table 
        const saveUser = new users({
            username, 
            email, 
            password, 
        }); 

        await saveUser.save(); 

        res.status(200).json({
            saveUser, 
        })
    }); 

    app.listen(3000);

} catch(error) {
    console.log(error); 
}