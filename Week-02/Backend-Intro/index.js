// Introduction to express Library 

const express = require('express'); 
const app = express(); 
const port = 2001; 
 
 
app.get('/backend-intro/hello', (req, res) => {
    res.send("Hello Priyanshu from Express Server."); 
});

app.listen(port, () => {
    console.log(`The application is running on ${port}`); 
})

