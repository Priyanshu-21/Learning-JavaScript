// A Small project understanding connection of Mongodb to Express Server. 
const mongoose = require('mongoose'); 
require('dotenv').config(); 

// Connect to connection string 
mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.j0sx7.mongodb.net/`); 

const schema = {
    username: String, 
    email: String, 
    password: String, 
}

const User = mongoose.model('User', schema); // Creating model

const userDetail = new User({
    username: "Priyanshu", 
    email: "priyanshu@example.com", 
    password: "1234"
}); 

userDetail.save().then(data => console.log(data)); 

console.log("User is added to database successfully"); // this will print first. 