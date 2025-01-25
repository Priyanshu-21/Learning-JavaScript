// Some more examples of Asynchronous Javascript 
// Example of asynchronous Js using callback 
function fetchData(callback) {
    setTimeout(() => {
        const data = {name: "Priyanshu", age: "24"}; 
        callback(data); 
    }, 3000); 
}
// callback function definitation 
fetchData(function(data) {
    console.log(data); 
}); 
console.log("Data is being Fetched"); 