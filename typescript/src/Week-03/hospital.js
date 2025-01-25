// Doing authentication & validation without using middleware
const express = require('express'); 
const app = express(); 

// Logic to validate ursname, pwd & no. of Kidney's patient has. 
app.get('/get-health', function (req, res) {
    // get request headers & params
    const username = req.headers.username; 
    const password = req.headers.password; 
    const kidneyId = req.query.kidneyId;

    // validation & auth logic 
    // inverse auth logic 
    if(!(username === 'Priyanshu' && password === 'pass1234')) {
        res.json({
            msg: "Invalid Username & Password"
        }); 

        return;
    }

    // inverse validation logic
    if(kidneyId != 1 && kidneyId != 2) {
        res.json({
            msg: "Please validate your Kidney's count"
        }); 

        return; 
    }
    // base condidtion: all true
    res.status(200).json({
        msg: "Congratulations!!! You're a healthy man"
    }); 

})

// want to get the username and password detils 
app.get('/get-user', function (req, res) {
    const username = req.headers.username; 
    const password = req.headers.password; 

    // validation for username and password 
    if(!(username === "Priyanshu" && password === "pass1234")) {

        res.status(403).json({
            msg: "Username or Password is invalid"
        }); 

        return; 
    }

    res.status(200).json({
        username, 
        password
    }); 
})
app.listen(3000); 

// In the above code we are breaking the DRY principle
// by using same authentication logic again. 