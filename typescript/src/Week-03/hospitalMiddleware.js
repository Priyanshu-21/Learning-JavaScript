// Intro to middlewares
const express = require('express'); 
const app = express(); 

let userDetails = {
    username: "Priyanshu", 
    password: "pass1234",
}; 
// I want the authentication & validate kidney no's 
function validateUser(req, res, next) {

    if(!(userDetails.username === "Priyanshu" && userDetails.password === "pass1234")) {
        res.status(404).json({
            msg: "User or password is incorrect"
        }); 

        return; 
    } else {
        next(); 
    }
}

function validateKidney(req, res, next) {

    const kidneyId = req.query.kidneyId; 
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Please check your kidney count"
        }); 

        return; 
    } else {
        next(); // as there is not other middleware chaining, it will reach to controller
    }
}
// controller 
app.get('/get-health', validateUser, validateKidney, function (req, res) {

    // Logic reaches controller after middleware checks 
    res.status(200).json({
        msg: "Your are healthy"
    }); 
}); 

app.get('/get-user', validateUser, function (req, res) {

    // Logic reaches when user validation is done through middleware
    res.status(200).json({
        userDetails
    }); 
})

app.listen(3000); 