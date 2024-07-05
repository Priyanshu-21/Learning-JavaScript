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
console.log(IPhone.name);