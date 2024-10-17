// Middleware to validate the JWT token & Sessions 
import jwt from 'jsonwebtoken'; 
import express from 'express'; 

const app = express(); 

global.userPayload = { }; 

app.use(express.json());

function validateToken(req, res, next) {

    const getToken = req.header.authorization; 
    //const getToken = getAuth.split(' ') [1]; 
    
    if(getToken)
    jwt.verify(getToken, process.env.secretKey, function(err, payload) {

        if(err) {
            res.status(404).json({
                msg: `Please re - login session expired at ${err.expiredAt}`, 
            }); 

            return; 
        } else {
            req.userPayload = payload; 
            next(); 
        }
    }); 
}

export default validateToken; 