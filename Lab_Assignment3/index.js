//getting input from form
let principle = document.getElementById("my-principle");
let rate = document.getElementById("my-rate");
let time = document.getElementById("my-time");
let result = document.getElementById("result");
const button = document.getElementById("calculate")
//parsing variables

//writing formula

//adding event listener
button.addEventListener('click', function(event){
    
    event.preventDefault();
    let p = parseFloat(principle.value);
    let r = parseFloat(rate.value);
    let t = parseFloat(time.value);
    let interest = p * (r/100) * t;
    let fixedInterest = interest.toFixed(2);
    console.log(fixedInterest);
    result.innerHTML = ``;
    result.innerHTML = `<h1>Your result</h1> <br> With a beginning principal of $${p}
     and with a growth rate of ${r}% for ${t} years,<br> your total interest will be $${fixedInterest} 
     with a grand total of $${fixedInterest + p}. `
});