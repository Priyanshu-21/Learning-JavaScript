// In - Memory todo application logic 
// In this I learned about how it's little difficult to manage State's in DOM 
const todos = [
    {
        id: 1, 
        title: "Learning Programming", 
        description: "Introduction to programming", 
    }, 
    {
        id: 2, 
        title: "Learning Problem Solving", 
        description: "How to solve a problem", 
    }, 
]; 

function show() {
    const getID = document.getElementById('todos'); 

    for(let i = 0; i < todos.length; i++) {
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', `${i + 1}`); 

        const setTitle = document.createElement('h4'); 
        const setDesc = document.createElement('h4'); 

        setTitle.innerHTML = todos[i].title;
        setTitle.setAttribute('id', `title${i + 1}`);  
        setDesc.innerHTML = todos[i].description; 

        createDiv.appendChild(setTitle); 
        createDiv.appendChild(setDesc);
        
        getID.appendChild(createDiv); 
    }
    // createTitle.innerHTML = todos[0].title; 
    
}
