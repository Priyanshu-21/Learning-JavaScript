// Introduction to asynchronous javascript 
// javascript architecture : - callStack + WebApis + callback Queue + event loop 

// Ex: 01 setTimeout function (Built-in async functions)
console.log("Hello My name is Priyanshu"); 
function callToPrint() {
    console.log("Hello there from function");
}
setTimeout(callToPrint, 1000); // wait for 20 seconds

setTimeout(() => {
    console.log("Hello there from another function"); 
}, 500);
let a = 1; 
for(let i = 0; i < 1000000000; i++) {
    a = a + i; 
}

console.log(a);

console.log("This program ends here");

// Ex: 02 fs.readFile node.js method to read the file 
const fs = require('fs'); 

fs.readFile("hello.txt", "utf-8", function (err, data) {
    console.log(data); 
}); 

console.log("Are you sure you are reading from the file?")

// Ex: 03 fetch method (used in api calling)