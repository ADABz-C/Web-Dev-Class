/**
 * INTERACTIVE.JS - Student Coding Section
 * Complete the tasks below to make the city interactive!
 * Each task is clearly marked with TODO comments
 */

// ========================================
// TASK 1: Toggle Day/Night Mode
// ========================================
// When the day/night button is clicked:
// 1. Toggle the 'night' class on the scene
// 2. Change the button text based on current mode
// 3. Update the status message

// TODO: Get the button element
// Hint: Use document.getElementById() with id "toggleDayNight"
const toggledaynight = document.getElementById('toggleDayNight');


// TODO: Get the scene element
// Hint: Use document.getElementById() with id "cityScene"
const cityscene = document.getElementById('cityScene');

// TODO: Get the status element
// Hint: Use document.getElementById() with id "status"
const status = document.getElementById('status');

// TODO: Add click event listener to the button
// Hint: Use addEventListener('click', function() { ... })
toggledaynight.addEventListener('click', (e) =>{
    e.preventDefault();
    cityscene.classList.toggle('night');
});




// ========================================
// TASK 2: Toggle Street Lights
// ========================================
// When the lights button is clicked:
// 1. Toggle the 'on' class on both street lights
// 2. Update the status message

// TODO: Get the street lights toggle button


// TODO: Get both street light elements
// Hint: Use document.getElementById() for "streetLight1" and "streetLight2"
const streetLight1 = document.getElementById('streetLight1');
const streetLight2 = document.getElementById('streetLight2');
const togglelightbtn = document.getElementById('toggleLights');



// TODO: Add click event listener to toggle lights
togglelightbtn.addEventListener('click', (e)=>{
    streetLight1.classList.toggle('on');
    streetLight2.classList.toggle('on');
    if(streetLight1.classList.contains('on')){
        status.textContent = 'Street Light Activated!';
    } else {
        status.textContent = 'Street Light Deactivated';
    }
})

// ========================================
// TASK 3: Move the Car
// ========================================
// When the car button is clicked:
// 1. Move the car across the street
// 2. After 2 seconds, move it back to start
// 3. Update status messages

// TODO: Get the move car button
const moveCarbtn = document.getElementById('moveCar');

// TODO: Get the car element
const car = document.getElementById('car');

// TODO: Add click event listener to move the car
// Hint: Change the left style property to move it

moveCarbtn.addEventListener('click', (e) => {
    e.preventDefault();
    car.style.left = '600px';
    setTimeout(function(){
        car.style.left = '60px';
    })

},2000)


// ========================================
// TASK 4: Toggle Building Window Lights
// ========================================
// When the building lights button is clicked:
// 1. Toggle the 'lit' class on all windows
// 2. Update the status message

// TODO: Get the building lights button


// TODO: Get all window elements
// Hint: Use document.querySelectorAll('.window')


// TODO: Add click event listener to toggle all windows
// Hint: Loop through all windows and toggle the 'lit' class




// ========================================
// BONUS CHALLENGE (Optional)
// ========================================
// Try these if you finish early:
// 1. Make the car honk (change emoji) when it moves
// 2. Make windows turn on randomly at night
// 3. Add a sound effect or alert when changing to night
// 4. Create a reset button to set everything back to day mode
