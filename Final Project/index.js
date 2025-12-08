// Sumbit Sign Up form to JSON
console.log('Connected to index.js....'); //checking connection




// Beginning of Login

const loginForm = document.getElementById('loginForm');

//Listening for login attempt
//Logging in

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    //reading form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    //getting user list from local storage
    const users = JSON.parse(localStorage.getItem('userData')) || [];

    //matching username with pwd
    const userFound = users.find(userData => 
        userData.username === username && userData.password === password
    );

    if(userFound){
        window.alert('Login successful!');
        console.log('logged in: ', userFound);
        window.location.replace("home.html")
    }
    else{
        window.alert("Invalid username or password");
    }

})

