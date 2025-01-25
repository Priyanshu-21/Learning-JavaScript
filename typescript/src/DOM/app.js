// Introduction to Document Object Model (DOM)
// Selecting the elements

// 1. querySelectory ---> get the query elements as exact as CSS extract.  
// 2. GetElementsByClassName --> Get the element by class name 
// 3. GetElementById 
// 4. GetElementsByTagName --> Getting values from the tag name from HTML
const redColor = document.querySelector('.red'); 
const blackColor = document.querySelector('.black'); 
const productImg = document.querySelector('.product-image'); 
const feedback = document.querySelector('.feedback'); 

const greyColor = document.getElementsByClassName('grey'); 

const cartButton = document.getElementById('button'); 

const itemTag = document.getElementsByTagName('h3')[0]; // first h3 tag name 

// Element Manipulation 
redColor.addEventListener('click', function () {
    cartButton.style.backgroundColor = "red"; 
    itemTag.style.backgroundColor = "red"; 
    productImg.style.backgroundImage = 'url("./Img/red-benz.jpg")'; 
}); 

blackColor.addEventListener('click', function () {
    cartButton.style.backgroundColor = "black"; 
    itemTag.style.backgroundColor = "black"; 
    productImg.style.backgroundImage = 'url("./Img/black-benz.jpg")';
});

greyColor[0].addEventListener('click', function () {
    cartButton.style.backgroundColor = "grey"; 
    itemTag.style.backgroundColor = "grey"; 
    productImg.style.backgroundImage = 'url("./Img/gray-benz.jpg")';
}); 

// Cart & feedback Button Event Manipulation 
const cartEvent = () => {
    cartButton.style.display = "none"; 
    feedback.style.display = "block"; 
}

cartButton.addEventListener('click', cartEvent); 

const feedbackEvent = () => {
    feedback.style.display = "none"; 
    cartButton.style.display = "inline"; // display: inline, block, flex & so on. 
}

feedback.addEventListener('click', feedbackEvent); 


