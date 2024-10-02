// Introduction middleware in Request - Response cycle 
const express = require('express'); 
const app = express(); 

// cookies Middleware 
async function cookiesValidation(cookies) {
    try {
        const data = await externallyValidateCookies(cookies.testcookies);
    } catch {
        throw new Error ('Invalid Cookies');
    }

    return data; 
}
app.get('/', function(req, res) {
    // calling to the middleware to get the cookies data
    const result = cookiesValidation('123'); 

    console.log(result); 
})

app.listen(3000); 

// This middleware func will give error as don't have correct cookies detail to validate