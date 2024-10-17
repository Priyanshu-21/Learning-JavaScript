// create token with username as payload 
import { } from 'dotenv/config'; 
import jwt from 'jsonwebtoken'; 


const createToken = (payload) => {
    const secretKey = process.env.secretKey; 
    const options = {
        expiresIn: '1h', 
    }; 

    const token = jwt.sign(payload, secretKey, options); 

    return token; 
};

export default createToken; 