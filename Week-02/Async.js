// Promises, Async & await functions 

async function printName(name) {
    return name; 
}

let name = "Priyanshu Mishra"; 

const result = printName(name); 
// console.log(result); 

// New function to understand Promise. 

const getJSON = async () => {

    const request = () => new Promise((resolve, reject) => (setTimeout( () => resolve({name: "Priyanshu Mishra"}), 2000) )); 

    const result = await request(); 
    return result; 
}

console.log(getJSON()); // this is giving me JSON as pending state. 

// Need to get info on what is inside this promise. 
getJSON().then(result => console.log(result)); 


// Combine two Promise Objects 
const getDetails = async () => {
    // Promise 1 
    const getName = new Promise((resolve, reject) => resolve({name: "Priyanshu"})); 

    // Promise 2 
    const getAge = new Promise((resolve, reject) => resolve({age: 23})); 

    // combine promise 1 & 2 
    const combineResult = Promise.all([getName, getAge]); 

    return combineResult; 
}

// How to access promises 
const resultCombine = async () => {
    const result = await getDetails(); 
    console.log(result) 
}

resultCombine(); 

getDetails().then(result => console.log(result)); // Second method 