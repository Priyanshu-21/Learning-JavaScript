// Introduction to zod library in Schema or input validation
const zod = require('zod'); // use of zod as library
const express = require('express'); 
const app = express(); 

// zod Schema to take kidney's length validation logic 
const schema = zod.array(zod.number()); 
app.use(express.json()); 

app.post('/get-checkup', function (req, res) {

    const kidneys = req.body.kidneys; 
    const response = schema.safeParse(kidneys);    // validation check 

    res.status(200).json({
        response, 
    })

})
app.listen(3000); 