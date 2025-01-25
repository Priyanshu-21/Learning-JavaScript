// How to allocate memory in JavaScript 
// Stack : - Primitive data types (use the copy technique) 
// Heap : - Non - Primitive data types (function, objects, class) | reference technique

// Example of Stack 
let nameOne = "Priyanshu"; 

let nameTwo = nameOne; 

nameTwo = "Mishra"
console.log(nameOne);
console.log(nameTwo);

// Example of Heap: 
let userOne = {
    userName: "priyanshu@google.com", 
    password: "Pass+2145"
}; 

let userTwo = userOne; 

userTwo.userName = "priyanshu@gmail.com"; 

console.log(userOne); 
console.log(userTwo); 


