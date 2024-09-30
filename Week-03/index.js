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

app.use(express.json()); 

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys; // John's kidney health is not okay  
    const numberofKidneys = users[0].kidneys.length; // A person has only 2 kindey's 
    // Got the kidney's details
    let unhealthyKidney = 0; 
    for(let i = 0; i < johnKidneys.length; i++) {
        if(!johnKidneys[i].healthy) {
            unhealthyKidney += 1; 
        }
    }
    const healthyKidney = numberofKidneys - unhealthyKidney; 
    
    res.json({
        numberofKidneys, 
        unhealthyKidney, 
        healthyKidney, 
        status: 200, 
    });  
})

app.post('/', function (req, res) {
    const unhealthySurgery = req.body.isHealthy; // get the boolean values as false. 
    // Now implant the unhealthy kidney 
    users[0].kidneys.push({
        healthy: unhealthySurgery, 
    })  

    res.json({msg: "Done!"})

})

app.put('/', function (req, res) {
    
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            users[0].kidneys[i].healthy = true;
        }
    }


    res.json({msg: "ReTransplant Done!"})
})

// Now, All kidney's health is okay but the count is not okay. 
app.delete('/', function (req, res) { 
    const newKidneys = []; 

    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })  
        }
    }

    users[0].kidneys = newKidneys;

    res.json({msg: "John is now a healthy man"}); 
})

app.listen(3000); 

