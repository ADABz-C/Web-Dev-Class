// Dating
const ticketNum = document.getElementById("ticketNum");
const ticketCost = document.getElementById("ticketCost");
let ttCost = document.getElementById("ttCost");

let ticketN = 3;
let ticketC = 14;
let totalC = ticketN*ticketC;

ticketNum.innerHTML = `Tickets: ${ticketN}`;
ticketCost.innerHTML = `Cost: $${ticketC}`;
ttCost.innerHTML = `Total: $${totalC}`;

// Shopping

let jacketC = 70;
let sweaterC = 55;
let shirtC = 35;
let pantsC = 75;
let skirtC = 49;
let sandalsC = 30;
let shoesC = 60;

let accB = 235.87;

let cart = `${accB - shirtC - pantsC - shoesC}`;
// console.log(`Balance = ${cart}`);

let accMessage = document.getElementById('bank');
accMessage.innerHTML = `After purchasing the outfit the, your bank balance is ${cart}`;
let addJacket = document.getElementById('addJacket');
let boolJacket;

if (cart - jacketC < 0){
    boolJacket = false;
}
else {
    boolJacket = true;
}

addJacket.innerHTML = `Add Jacket: ${boolJacket}`;

// PIZZA

let studentNum = document.getElementById('studentNum');
let remainder = document.getElementById('remainder');

const pizza = 4;
const slices = 8;

let foodAmount = `${pizza * slices}`;

numOfStudents = foodAmount/2.5;
slicerem = foodAmount - (Math.floor(numOfStudents) * 2.5);

studentNum.innerHTML = `Students: ${Math.floor(numOfStudents)}`;
remainder.innerHTML = `Rector: ${slicerem}`;

//Monty's Mega Bar receipt

let monty = document.getElementById('Monty');
let adultP = 12;
let childP= 6;
let drinksP = 1.5;

let bill = ((2*adultP) + (childP) + (3*drinksP));

monty.innerHTML = `$${bill}`;


//Average earned tips

let tips = document.getElementById('tips');
let wk1 = 202.45;
let wk2 = 134.97;
let wk3 = 256.63;
let wk4 = 178.22;

avTips = ((wk1 + wk2 + wk3 + wk4)/4);

tips.innerHTML = `Weekly Tip Average: $${avTips}`;