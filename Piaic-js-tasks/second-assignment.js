// *** 1
// cityName = prompt("Enter City Name");
// cityName = (cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase())
// console.log(cityName);
// cityName === "Karachi"?alert("Welcome to city of lights"):"";

// *** 2
// signalLight = prompt("Enter Light Color")
// function example() {
//     return signalLight === "Red" ? alert("MustStop")
//         :signalLight ===  "Yellow" ? alert("Ready To Move")
//             :signalLight ===  "Green" ? alert("Move Now")
//                 : "null";
// }
// example()

// ** 3
// let record = []
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
//     record.push("++a == 5, given condition for variable a is true")
// } else { record.push("++a == 5, given condition for variable a is false") }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
//     record.push("b++ == 83, given condition for variable a is true")
// } else { record.push("b++ == 83, given condition for variable a is false") }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
//     record.push("c++ === 13, given condition for variable a is true")
// }else{record.push("b++ == 83, given condition for variable a is false")}

// if (c === 13) {
//     alert("condition 2 is true");
//     record.push("c === 13, given condition for variable a is true")
// }else{record.push("c++ == 13, given condition for variable a is false")}

// if (++c < 14) {
//     alert("condition 3 is true");
//     record.push("++c < 14, given condition for variable a is true")
// }else{record.push("++c < 14, given condition for variable a is false")}
// if (c === 14) {
//     alert("condition 4 is true");
//     record.push("c === 14, given condition for variable a is true")   
// }else{record.push("c === 14, given condition for variable a is false")}

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
//     record.push("The cost equals")
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// ** 4
// let maths = +prompt("Marks in Maths");
// let english = +prompt("Marks is English");
// let science = +prompt("Marks is Science");
// let totalMarks = 300;
// let marksObtained = maths + english + science;
// let percentage = (marksObtained / totalMarks) * 100

// if (percentage <= 100 && percentage >= 80) {
//     remarks = "Excellent"
//     grade = "A-one"
// }
// else if (percentage < 80 && percentage >= 70) {
//     remarks = "Good"
//     grade = "A"
// }
// else if (percentage < 70 && percentage >= 60) {
//     remarks = "You need to improve"
//     grade = "B"
// }
// else if (percentage < 80 && percentage >= 70) {
//     remarks = "Sorry"
//     grade = "Fail"
// }
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

// ** 5 
// secretNum = 8;
// userGuess = +prompt("Guess The number");
// if (userGuess > 0 && userGuess <= 10) {
//     if (userGuess === secretNum) {
//         alert("Bingo! Correct answer")
//     }
//     else if (userGuess === secretNum + 1 || userGuess === secretNum - 1) {
//         alert("Close enough to the correct answer")
//     }
//     else {
//         alert("Try again");
//     }
// }
// else{
//     alert("Enter number between 1 to 10")
// }

// ** 6
// inputNum = prompt("Enter to check Even/Odd")
// inputNum % 2 === 0? alert("It's Even"):alert("It's Odd"); 

// ** 7
// userInput1 = +prompt("Enter 1st Number");
// userInput2 = +prompt("Enter 2nd Number");
// operator = prompt("Select the operation +, -, *, /, %")

// if (operator == "+" || operator ==  "-" || operator ==  "*" || operator ==  "//"  || operator ==  "%") {

//     if (operator === "+") {
//         alert(userInput1 + userInput2)
//     }
//     else if (operator === "-") {
//         alert(userInput1 - userInput2)
//     }
//     else if (operator === "/") {
//         alert(userInput1 / userInput2)
//     }
//     else if (operator === "*") {
//         alert(userInput1 * userInput2)
//     }
//     else if (operator === "%") {
//         alert(userInput1 % userInput2)
//     }
// }
// else {
//     alert("Specific operators only")
// }

//  ** 8
// let stateCheck = +prompt("Enter number to check state");
// if (typeof (stateCheck) == "number") {
//     if (stateCheck < 0) {
//         alert("Negative number")
//     }
//     else if (stateCheck > 0) {
//         alert("Positive number")
//     }
//     else if (stateCheck === 0) {
//         alert("Zero (-:_);")
//     }
//     else {
//         alert("Pls Only insert unumbers")
//     }
// }
// else {
//     alert("Pls Only insert unumbers")
// }

// ** 9
// let passwordUser = "123qwerty";
// let givenPassword = prompt("Enter Your Password");
// passwordUser === givenPassword ? alert("Correct! The password you entered matches the original password"):alert("Incorrectpassword")

// ** 10
// time = prompt("user input in 24 hours clock format like: 1900 = 7pm")

// if (time >= "0000" && time < "1200") {
//     alert("Good Morning!")
// }
// else if(time >= "1200" && time < "1700") {
//     alert("Good Afternoon!")
// }
// else if(time >= "1700" && time < "2100") {
//     alert("Good Evening!")
// }
// else if(time >= "2100" && time < "2359") {
//     alert("Good Night!")
// }

