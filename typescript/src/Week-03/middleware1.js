// Understanding the middleware fucntions 
const express = require('express'); 
const app = express(); 

// Creating middleware 'logged'
function myLogged(req, res, next) {
    console.log("Logged"); 
    next(); 
}

// Creating middleware to change reqeust object 
function requestTime(req, res, next) {
    req.reuestTime = Date.now(); // request object to get date time 
    next(); 
}


app.use(requestTime); // application middleware use

// Controller: Get method 
app.get('/', function (req, res) {

    let sendMsg = "Hello!! Server <br>"; 
    sendMsg = sendMsg + `<small>Request time is now ${req.requestTime}</small>`; 

    res.send(sendMsg); 
}) 

app.listen(3000); 
