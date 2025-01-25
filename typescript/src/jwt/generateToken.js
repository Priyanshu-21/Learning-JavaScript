// Introduction to generate json webtoken for user's username
const jwt = require('jsonwebtoken'); 

const generateToken = (payload) => {
    const secretKey = 'Priyanshu1234@#'; 
    const options = {
        expiresIn: '1h', // Token expiration time
    }; 

    // call to sign function to generate the token for user
    const token = jwt.sign({payload: payload}, secretKey, options); 

    return token; 
}

module.exports = {
    generateToken, 
} 