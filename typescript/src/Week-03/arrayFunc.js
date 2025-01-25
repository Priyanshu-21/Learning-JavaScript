// Some of the array functions in JS 

// 1. Map Function: - Callback function to make changes in array element. 
const number = [2, 4, 6, 8]; 
// Now want to multiply the array element by 5 then use map function 
const newNumbers = number.map(element => {
    return element * 5;
}); 
console.log(newNumbers); 

// 2. Filter Function: - Use when you want to filter out some array data. 
const names = [
    {
        name: "Priyanshu"
    }, {
        name: "Ayush"
    }, {
        name: "Baljeet"
    }
]; 

const filterName = names.filter(element => {
    return element.name === "Priyanshu"; 
}); 

console.log(filterName); 

// 3. Reduce Function: - When you want to reduce the output of array to one number
const sum = [2, 4, 6, 8, 10]; 
// We can use reduce to calculate the sum of the array elements 

const ans = sum.reduce((index, element) => {
    return index + element; 
}, 1); 

console.log(ans);

// More on Reduce to be continued... 

// 4. Some, every and find functions in array. 