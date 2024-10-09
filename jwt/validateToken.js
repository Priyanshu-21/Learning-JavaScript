// Validate JWT & give token access to one route 
const express = require('express'); 
const jwt = require('jsonwebtoken'); 
const { generateToken } = require('./generateToken');
const app = express(); 

const secretKey = 'Priyanshu1234@#'; // this is my secret key 

const userDetails = {
    id: 123, 
    user: "Priyanshu", 
    password: "Priyanshu2145"
}

// Define middleware to validate token for user
function validateToken(req, res, next) {

    const authHeader = req.headers.authorization; 

    if(!authHeader) {
        res.status(401).json({
            msg: "Token is not provided for the user"
        }); 

        return; 
    }

    // token is there in header, need to verify it. 
    const token = authHeader.split(' ')[1]; // Bearer <token>
    jwt.verify(token, secretKey, function (err, payload) {
        if(err) {
            res.status(403).json({
                success: false, 
                msg: "User is not verified"
            })
        } else {
            req.userDetails = payload;
            console.log(req.userDetails); 
            next();  
        }
    }); 

}
// Controlller 
app.post('/login', function (req, res) {

    // Get the username & password from headers 
    const username = req.headers.username; 
    const password = req.headers.password; 
    
    if(!(username === userDetails.user && password === userDetails.password)) {
        
        res.status(401).json({
            success: false, 
            msg: "Please check the username and password"
        })

        return; 
    }

    const token = generateToken({username: userDetails.user}); 

    res.status(200).json({
        success: true, 
        msg: "Authentication Successfull", 
        token: token, 
    })

})

app.get('/isverified', validateToken, function (req, res) {

    res.status(200).json({
        success: 200, 
        msg: "You are verfied"
    })

})

// Problem is solved: Wrongly defined the paramaters to get token header. 

app.listen(3000); 