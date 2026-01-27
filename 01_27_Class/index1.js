console.log('Connected');
//////////////---------This file coveres arrow functions and array methods---------------////////////////

//arrow function example

let num = 5;
//Basic arrow function to calculate square of number, single parameter and single exp

let square = (n) => n*n; // square = (parameter) arrow function [means "will return"] a result 

console.log("Square of " + num + " is " + square(num));

//Multiple parameter
 
let add = (a,b) => a+b;

console.log("Sum of 6 and 7 is " + add(6,7));


//// Core Array methods ////

//.map {for copying and editing values in an array without transfroming original array}

let rating = [6,7,8,9,5];

let percentagerating = rating.map(rating => rating*10);

console.log("Percentage Ratings : " + percentagerating);


//.filter {Filter based on property}

let highQualtiyRating = rating.filter(rating => rating>= 7);
console.log("High ratings are : " + highQualtiyRating);



//combining functions, filter and map
//Filter it then map it [arrange in the order you want]
let highQualtiyPercentageRating = rating.filter(rating=> rating>=7)
                                        .map(rating=> rating*10)

console.log ("HQPR : " + highQualtiyPercentageRating);

