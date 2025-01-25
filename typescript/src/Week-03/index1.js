// Creating a http Server using Express Library 
const express = require('express'); 
const app = express(); 

app.listen(3000); // The address for the http server

// function to calculate sum of number
function sumofN(n) {
    let ans = 0; 
    for (let i = 0; i <= n; i++) {
        ans += i; 
    }
    return ans; 
}
app.get('/', function(req, res) {
    const n = req.query.n; 
    const ans = sumofN(n); 
    res.send("The sum of "+ n +" numbers is " + ans); 
})

