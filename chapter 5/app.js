
// Question 01
var num1 = 5;
var num2 = 3;

var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>" + "<br>")


// Question 02
var difference = num1 - num2;
document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br>");

var product = num1 * num2;
document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br>");

var division = num1 / num2;
document.write("division of " + num1 + " and " + num2 + " is " + division + "<br>");

var remainder = num1 % num2;
document.write("Remainder of " + num1 + " and " + num2 + " is " + remainder + "<br>" + "<br>");


// Question 03
var myVar;

document.write("value after variable declaration is: " + myVar + "<br>");

myVar = 5;

document.write("Initial value: " + myVar + "<br>");

myVar++;

document.write("Value after increment is: " + myVar + "<br>");

myVar += 7;

document.write("Value after addition is: " + myVar + "<br>");

myVar--;

document.write("Value after addition is: " + myVar + "<br>");

var remainder = myVar % 3;

document.write("The remainder is: " + remainder + "<br>" + "<br>");


// Question 04
var ticketPrice = 600;

var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("Cost of one movie ticket is " + ticketPrice + " PKR. " + "Buying " + numberOfTickets + " tickets will cost " + totalCost + " PKR." + "<br>" + "<br>");

// Question 05

var tableNum = 4;
var counter = 1;
var inc = 1;

document.write(
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>" +
  tableNum + " X " + counter++ + " = " + tableNum * inc++ + "<br>"
  + "<br>"
);

// Question 06

var celsiusTemp = 25;

var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

var fahrenheitTemp2 = 77;

var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;

document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C<br>" + "<br>");


// Question 07

document.write("<h1>Shopping Cart</h1>");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;


document.write("Price of items 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of items 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping charges " + shippingCharges + "<br>" + "<br>");

var totalCostItem1 = priceItem1 + quantityItem1;
var totalCostItem1 = priceItem2 + quantityItem2;
var totalCost = totalCostItem1 + totalCostItem1 + shippingCharges;

document.write("Total cost of your order is " + totalCost + "<br>" + "<br>");

// Question 08

document.write("<h1>Mark Sheet</h1>");

var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "<br>" + "<br>");

// Question 09

document.write("<h1>Currency to Pakistani Rupees.</h1>");

var usd = 10;
var sar = 25;

var usdToPkrRate = 104.80;
var sarToPkrRate = 28;


var totalPkr = (usd * usdToPkrRate) + (sar * sarToPkrRate);

document.write("Total in Pakistani Rupees: " + totalPkr + "<br>" + "<br>");


// Question 10

document.write("<h1>Calculations</h1>");

var number = 20;
var result = ((number + 5) * 10) / 2;

document.write(result + "<br>" + "<br>");

// Question 11

document.write("<h1>Age Calculator</h1>");

var currentYear = 2024;
var birthYear = 1999;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year " + currentYear + "<br>");
document.write("Birth Year " + birthYear + "<br>");
document.write("They are either " + age1 + " or " + age2 + " years old. " + "<br>" + "<br>");

// Question 12

document.write("<h1>The Geometrizer:</h1>");

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>" + "<br>");

// Question 13

document.write("<h1>The Lifetime Supply Calculator:</h1>");

var favoriteSnack = "chocolate bars";
var currentAge = 25;
var maximumAge = 80;
var amountPerDay = 2;

var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;

document.write("Favorite snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Your maximum age: " + maximumAge + "<br>");
document.write("Amount of snacks Per Day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "<br>");
