// Why, How, where do we need to do input validation 
const express = require('express'); 
const app = express(); 

// we have to use built in middleware here to get the bodies details
app.use(express.json()); // body only accepts the json format. 

app.post('/health-checkup', function (req, res) {

    const kidneys = req.body.kidneys; 
    const kidneyLength = kidneys.length; 

    res.status(200).json({
        msg: "Your kidney length is " + kidneyLength.toString()
    }); 
})

//Global Caches: Error handling middleware's 
app.use(function (err, req, res, next) {
    
    console.log(err); 

    res.json({
        msg: "There is somthing up with our server"
    })
})

//To understand input validation, need to understand zod library

app.listen(3000); 