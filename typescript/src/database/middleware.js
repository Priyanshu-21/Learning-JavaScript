// Middleware to validate the JWT token & Sessions 
import jwt from 'jsonwebtoken'; 
import express from 'express'; 

const app = express(); 

app.use(express.json());

function validateToken(req, res, next) {

    const getToken = req.headers.authorization; 
    //const getToken = getAuth.split(' ') [1]; 
    //console.log(getToken); 

    if(getToken)
    jwt.verify(getToken, process.env.secretKey, function(err, payload) {

        if(err) {
            res.status(401).json({
                msg: `${err.name} and ${err.message}`, 
            }); 
            return; 
        }
        // Token is valid and we need to more to next middleware 
        next(); 
    }); 
}

export default validateToken; 