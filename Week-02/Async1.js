// Why do need async & await keyword in js 

const fetchData = () => {

    const data = fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    return data.then(response => response.json()).then(json => console.log(json)).catch(err => console.error(err)); 
}

console.log(fetchData()); 

// When we called the fetch method, it is storing the response in Promised Object (calling fetch will invoke Promise Object)

// Now let's Optimize this code 

const fetchdataNew = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    const json = await response.json(); 
    console.log(json)
}

fetchdataNew(); 

// How to handle errors in promise in async/ await keyword 
const fetchnewData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        const json = await response.json(); 

        if(json.id == 1) json.completed = true; 
        else json.completed = false; 

        console.log(json);  
            
    } catch (error) {
        console.log("Api is not working", error); 
    }
}

fetchnewData(); 