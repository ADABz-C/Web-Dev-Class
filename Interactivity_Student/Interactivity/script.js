/**
 * SCRIPT.JS - Live Coding Demo
 * You will write code here during the demo!
 */

// Students will watch you code here!
// This file is intentionally empty - you'll fill it in during the live demo


console.log('JavaScript file loaded! Ready to code!');

const lightbutton = document.getElementById('lightButton');
const leftbulb = document.getElementById('leftBulb');
const rightbulb = document.getElementById('rightBulb');
const leftbeam = document.getElementById('leftBeam');
const rightbeam = document.getElementById('rightBeam');
const status = document.getElementById('status');


lightbutton.addEventListener('click', function(){
    leftbulb.classList.add('on');
    leftbeam.classList.add('on');
    rightbulb.classList.add('on');
    rightbeam.classList.add('on');
    status.innerHTML = "Lights are ON!!!";
})

