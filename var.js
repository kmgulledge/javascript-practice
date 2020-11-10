// Var Practice 1

var name = "pickles";

console.log(name);

// Instructions:
// Create 3 variables. One called: "name", one called "pizzaCount", and one called "isHungry".
// The name variable should be set to your name.
// The pizzaCount variable should be set to a number.
// The isHungry variable should be set to true or false.

var name = "Kevin";
var pizzaCount = 5;
var isHungry = true;
var totalCost = pizzaCount * 5.00;

console.log("Welcome: " + name);
console.log("Pizzas cost $5 each");
console.log("Your total is: $" + totalCost);
console.log("Still Hungry: " + isHungry);

// Variables for Cars
var carName = "Ford";
var yearOfCar = "2020";

console.log("Type of car you drive: " + carName);
console.log("Year of your vehicle is " + yearOfCar);

 // Notice that the confirm and prompt take in variables but the alert doesn't
 var doYouRock = confirm("The question is, do *you* rock?");
 var howMuchRock = prompt("How much do you rock?");

 // Alert the results
 alert(doYouRock);
 alert(howMuchRock);;

 // New Alert
 var whatDoYouDrive = prompt("What type of vehicle do you drive?");
 var whatYearOfVehicle = prompt("What is the year of the vehicle you drive?");
 var doYouLikeYourVehicle = prompt("Do you like the vehicle you drive?");

 alert(whatDoYouDrive);
 console.log(whatDoYouDrive);

 alert(whatYearOfVehicle);
 console.log(whatYearOfVehicle);

 alert(doYouLikeYourVehicle);
 console.log(doYouLikeYourVehicle);

 //Condition Variables
 // Here we create our prompt and confirm variables which will store user input.
 var confirmSushi = confirm("Do you like sushi?");
 var confirmGingerTea = confirm("Do you like Ginger Tea?");
 var sushiType = prompt("What kind of sushi do you like?");

 // If the user likes sushi (confirmSushi === true), we run the following block of code.
 if (confirmSushi) {
   alert("You like " + sushiType + "!");
 }
 // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
 else if (confirmGingerTea) {
   alert("You like ginger tea!!");
 }
 // If neither of the previous condition were true, we run the following block of code.
 else {
   document.write("You don't like sushi or ginger tea.");
 }

 var confirmPizza = confirm("Do you like pizza?");
 var confirmCocaCola = confirm("Do you like Coca Cola?");
 var pizzaType = prompt("What do you like on your pizza?");

 if (confirmPizza) {
     alert("You like " + pizzaType + "!");
 } else if (confirmCocaCola) {
     alert("You like Coca Cola!");
 } else {
     alert("You don't like Pizza or Coca Cola.");
 }