console.log("Connected to signup.js......");
//getting form elements
const signupForm = document.getElementById('signupForm');

//Listening for Form submission
// Signing up


let userData = JSON.parse(localStorage.getItem('userData')) || [];


signupForm.addEventListener('submit', function(event){
    event.preventDefault();

    //getting Form Values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    //Validating Submission

    if(!username || !password){
        window.alert("Fill all required fields!!");
    }
    console.log("Submitted");

    userData.push({
        username: username,
        password: password
    });

    localStorage.setItem('userData', JSON.stringify(userData));

    console.log('Updated user list:', userData);

    window.alert("You're all signed up!!!");

})
