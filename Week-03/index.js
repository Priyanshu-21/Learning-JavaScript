// Implement a simple hospital for kidney replacement. 
const express = require('express'); 
const app = express(); 

let users = [{
    name: "John", 
    kidneys: [{
        healthy: false, 
    }, {
        healthy: true, 
    }]
}]; 

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys[0]; // John's kidney health is not okay  
    const numberofKidneys = users[0].kidneys.length; // 2
    // Got the kidney's details 
    let unhealthyKidney = 0; 
    let healthyKidney = 0; 

    if(!johnKidneys.healthy) unhealthyKidney += 1; 

    healthyKidney = numberofKidneys - unhealthyKidney; 
    
    res.json({
        numberofKidneys, 
        unhealthyKidney, 
        healthyKidney, 
        status: 200, 
    });  
})

app.listen(3000); 

