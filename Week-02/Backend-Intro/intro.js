// 1. How to get values for the form tags 
// 2. Connect to MongoDB database
// 3. Create a table in DB & get the values of it. 

const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb+srv://UserDB:UserDB2145@atlascluster.ou6gyuq.mongodb.net/", (err, client) => {

    const db = client.db('UserDB');
    // get collection of the Db 
    db.collection('Users').find().toArray((err, result) => {
        if(err) throw err; 

        console.log(result); 
    }) 
    
    if(err) throw err;
})

//Note: - As of now the connection to Db  is failing. 