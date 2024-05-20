// Question 01

var a = 10;

document.write("Results:" + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>" + "<br>");


// Question 02

var a = 2;
var b = 1;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");

var results = --a - --b + ++b + b--; // 1 - 0 + 2 + 1 = 3
document.write("Results: " + results + "<br>" + "<br>");

// var rs1 = --a; // 1 = 1
// document.write("rs1: " + rs1 + "<br>" );

// var rs2 = --a - --b; // 0 - 0 = 0
// document.write("rs2: " + rs2 + "<br>" );

// var rs3 = --a - --b + ++b; // 0 - 0 + 0 = 0
// document.write("rs3: " + rs3 + "<br>" );

// var rs4 = --a - --b + ++b + b--; // 0 - 0 - 0 + 1 = -1
// document.write("rs4: " + rs4 + "<br>" ) ;

// Question 03

var userName = "Dua";
var greetingMessage = "Hello, " + userName + "! Welcome to our website.";

alert(greetingMessage);

// Question 05

var tableNum = +prompt("Enter number for Table") || 5;
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

var subject1 = "English";
var subject2 = "Math";
var subject3 = "Urdu";

var totalMarksAll = 100;
var totalMarks = 300;

var obtainedMarks1 = +prompt("Enter Your English subject Marks:");
var obtainedMarks2 = +prompt("Enter Your English subject Marks:");
var obtainedMarks3 = +prompt("Enter Your English subject Marks:");

var percentage1 = (obtainedMarks1 / totalMarksAll) * 100;
var percentage2 = (obtainedMarks2 / totalMarksAll) * 100;
var percentage3 = (obtainedMarks3 / totalMarksAll) * 100;

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

document.write(

  "<table border =1px>" +
  "<tr>" +
  "<th>" + " Subject " + "</th>" +
  "<th>" + " Total Marks " + "</th>" +
  "<th>" + " Obtained Marks " + "</th>" +
  "<th>" + " Percentage " + "</th>" +
  "</tr>" +

  "<tr>" +
  "<td>" + subject1 + "</td>" +
  "<td>" + totalMarksAll + "</td>" +
  "<td>" + obtainedMarks1 + "</td>" +
  "<td>" + percentage1 + "%" + "</td>" +
  "</tr>" +

  "<tr>" +
  "<td>" + subject2 + "</td>" +
  "<td>" + totalMarksAll + "</td>" +
  "<td>" + obtainedMarks2 + "</td>" +
  "<td>" + percentage2 + "%" + "</td>" +
  "</tr>" +

  "<tr>" +
  "<td>" + subject3 + "</td>" +
  "<td>" + totalMarksAll + "</td>" +
  "<td>" + obtainedMarks3 + "</td>" +
  "<td>" + percentage3 + "%" + "</td>" +
  "</tr>" +

  "<tr>" +
  "<th>" + " " + "</th>" +
  "<th>" + totalMarks + "</th>" +
  "<th>" + totalObtainedMarks + "</th>" +
  "<th>" + percentage + "%" + "</th>" +
  "</tr>" +

  + "</table>"
);