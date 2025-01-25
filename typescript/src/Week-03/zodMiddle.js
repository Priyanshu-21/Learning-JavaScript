// Combining Middleware & Zod library 
const express = require('express');
const zod = require('zod');  
const app = express(); 

// Define Schema
const schema = zod.object({
    email: zod.string().email(), 
    username: zod.string(), 
    password: zod.string().min(10).max(3), 
    kidneyId: zod.number()

}); 
// Defining Middlewares (Authentication and Data Validation)
function validateUser(req, res, next) {

    const email = schema.safeParse(req.body.email); 
    const username = schema.safeParse(req.body.username); 
    const password = schema.safeParse(req.body.password); 

    console.log(email.error); 

    if(!(email === "priyanshu@gmail.com" && username === "Priyanshu" && password === "pass1234")) {
        res.status(401).json({
            msg: "User is not present in hardcoded Database"
        }); 

        return; 
    } else {
        next(); 
    }
}

function validateKidney(req, res, next) {

    const kidneyId = schema.safeParse(req.body.kidneyId);

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Please check the kidney number"
        }); 

        return; 
    } else {
        next(); 
    }
}

app.use(validateUser); // Creating application middleware(as used in 2 controllers)

app.get('/get-health', validateKidney, function (req, res) {

    res.status(200).json({
        msg: "You are Healthy"
    }); 

}); 

app.get('/get-user', function (req, res) {

    res.status(200).json({
        email, 
        username, 
        password
    }); 
})

// Global Caches: Error handling middleware
app.use(function (err, req, res, next) {

    console.log(err); 
    res.json({
        msg: "We are getting error in the server"
    }); 
})

// Getting some error in the schema (Zod) validation | Need to check on this. 
app.listen(3000); 