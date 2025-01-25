// Implementing validation & authentication with DRY principle
const express = require('express'); 
const app = express(); 

// here we write DRY logic 
function userValidation(username, password) {

    if(!(username === "Priyanshu" && password === "pass1234")) {

        return false; 
    }

    return true;
}

function kidneyCount(kidneyId) {

    if(kidneyId != 1 && kidneyId != 2) {
        
        return false;
    }

    return true;
}

// controller 
app.get('/get-health', function (req, res) {
    const username = req.headers.username; 
    const password = req.headers.password; 
    const kidneyId = req.query.kidneyId; 

    // invoke the above two functions 
    if(!userValidation(username, password)) {
        res.status(401).json({
            msg: "Username & password is incorrect"
        }); 

        return;
    }
    
    if(!kidneyCount(kidneyId)) {
        res.status(401).json({
            msg: "Kidney count is invalid"
        }); 

        return; 
    } 

    res.status(200).json({
        msg: "You are healthy"
    }); 
    
})

app.get('/get-user', function (req, res) {
    const username = req.headers.username; 
    const password = req.headers.password;

    if(!userValidation(username, password)) {
        res.status(401).json({
            msg: "Username & password is incorrect"
        }); 

        return;
    }

    res.status(200).json({
        username, 
        password
    }); 

    
})
app.listen(3000); 

// Now need to understand this using middleware. 