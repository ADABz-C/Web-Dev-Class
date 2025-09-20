// document.getElementById("myh1").textContent = 'Hello';
// document.getElementById("myp").textContent = 'hi';

// console.log("I love pizza");

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// alert(`Hello ${username}`);

const myButton = document.getElementById("my_button");
const clickCount = document.getElementById("click-count");
let count = 0;

addEventListener('click', function(){
    count++;
    clickCount.textContent = count;
    
    console.log(`Button has been clicked ${count} times`)
});