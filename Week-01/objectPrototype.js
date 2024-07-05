// Understanding of objects, prototype, inheritance and prototype chaining. 

let appleInc = {
    name: "Apple", 
    logo: "Apple Fruit", 
    operatingSystem: "Apple Software", 
    on() {
        console.log("Turing on your "+ this.name +" device");
    }, 
    off() {
        console.log("Turing off your "+ this.name +" device");
    }
}

// This is object with properties and methods(functions --> on and off) 
let IPhone = {
    name: "IPhone", 
    operatingSystem: "IOS"
}

// console.log(appleInc); 
console.log(IPhone); 

// Prototyping : - appleInc --> Prototype and IPhone : - inherits properties and methods
IPhone.__proto__ = appleInc; // this proto method is depreciated (Don't use)
console.log(IPhone.name); // log : - IPhone name's property value 
console.log(IPhone.logo); // IPhone don't have property of logo (so it takes the property of it's prototype which is appleInc)
console.log(IPhone.on());

// Prototype Chaining : -
const board = {
    boardName: "CBSE", 
    city: "Delhi, New Delhi"
}

const school = {
    schoolName: "Kendriya Vidyalaya", 
    city: "Noida, Uttar Pradesh"
} 

const student = {
    name: "Priyanshu", 
    classNumber: "12th G", 
    description() {
        console.log(this.name + " studies in "+ this.classNumber);
    }
}

// Now implement the concept of prototype chaining here 
student.__proto__ = school; // school is the prototype of student object
school.__proto__ = board; // board is the prototype of school object 

// board --> school --> student 

console.log(student.description()); // log student object description method
console.log(student.schoolName); // log from the prototype of student (School). 
console.log(student.city); // log from prototype of student and not from prototype of school (board)

// Understanding of this keyword in prototypal inheritance 

this.name = "Priyanshu"; // if you want to make name as global variable 
const getName = () => {
    console.log(this.name);
} 

getName(); 
 