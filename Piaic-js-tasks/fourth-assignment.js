// ** Task 1
// ***Write a program to replace the “Hyder” to “Islam” in the word***

// city = "Hyderabad";
// cityReplace = city.replace("Hyderabad","Islamabad");
// console.log(cityReplace);

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_

// ** Task  2
// *** Write a program that converts a string “472” to a number 472.***

// number = "472";

// // ****Method 1*****
// console.log(typeof( number));
// number = +number
// console.log(typeof(number));

// // ****Method 2*****
// console.log(typeof( number));
// number = parseInt(number);
// console.log(typeof( number));

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  3
// ***Write a program to take password as an input from user.***
// let password = prompt("Enter password");
// let regex = /^[0-9a-zA-Z]*$/;

// if (password.length >= 8) {
//     if (regex.test(password)) {
//         x = +password.slice(0, 1);
//         if (isNaN(x)) {
//             securePass = password;
//             password = ""
//         } else {
//             console.log("Password should not start with a number"); 
//         }
//     } else {
//         console.log("Number should contain alphabets and numbers");
//     }
// } else {
//     console.log("Password must at least 8 characters long");
// }

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  4
// ***Write a program to validate email address***

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.match(mailformat)) {
//         alert("Valid email address!");
//         return true;
//     }
//     else {
//         alert("You have entered an invalid email address!");
//         return false;
//     }
// }
// email = prompt("Enter valid email address","ibrahimkhan@gmail.com")
// xyz = ValidateEmail(email)

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  5
//**program that takes a positive integer from user ***
// number = +prompt("Enter number");
// document.write(`number: ${number} <br>.round off value: ${Math.round(number)} <br>.floor value: ${Math.floor(number)} <br>.ceil value: ${Math.ceil(number)}`);

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  6
// ***Write a program that simulates a dice using random() method of JS Math class***

// dice = Math.ceil(Math.random() * 6)
// console.log(`Random dice value: ${dice}`);


// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  7
// ***Write a program to count the number of occurrences of the word “the”***

// text = "The quick brown fox jumps over the lazy dog.";
// regex = /the/ig;
// occur = text.match(regex).length
// console.log(occur);

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  8
//*** Convert number in words.***
// bhai ye bnany meh phat gai xd

// digit = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Ninteen'];
// tens = ['Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// hT = ["Hundread",'Thousand']

// x = prompt("Convert number in words 0 to 999.Example","123")
// x1 = parseInt(x.slice(0,1))
// x2 = parseInt(x.slice(1,2))
// x3 = parseInt(x.slice(1,3))
// x4 = parseInt(x.slice(2,3))

// // for 0 to 9
// if (x.length === 1) {
//    xyz = parseInt(x)
//    console.log(digit[x]);
// }
// // for 10 to 19
// else if(x.length === 2 && x1 === 1 ){
//     console.log(`${teens[x2]}`)
// }
// // for 21 to 29 , 31 to 39 ...... 91 to 99
// else if(x.length === 2 && x1 !== 1 && x2 !== 0){
//     x1 = x1 - 2
//     console.log(`${tens[x1]}+" "+${digit[x2]}`);
// }
// // for 20,30,40 ..... 90
// else if(x.length === 2 && x2 === 0){
//     x1 = x1 - 2
//     console.log(`${tens[x1]}`);
// }
// // for 100,200,300 ..... 900
// else if(x.length === 3 && x3 === 0){
//     console.log(`${digit[x1]} ${hT[x3]}`);
// }
// // for 101 to  109
// else if(x.length === 3 && x3 !== 0 && x2 === 0){
//     console.log(`${digit[x1]} hT[0] and ${digit[x4]}`);
// }
// // for 110 to 199
// else if(x.length === 3 && x2 === 1){
//     console.log(`${digit[x1]} ${hT[0]} and ${teens[x4]}`);
// }
// //for 120 ,130 ... 220 ,230 ... 990
// else if(x.length === 3 && x4 === 0){
//     x2 = x2 - 2
//     console.log(`${digit[x1]} ${hT[0]} and ${tens[x2]}`);
// }
// else if(x.length === 3 && x2 !== 0 && x2 !==1  && x4 !== 0){
//     x2 = x2 - 2
//     console.log(`${digit[x1]} ${hT[0]} and ${tens[x2]} ${digit[x4]}`);
// }

// ** Task  9
// ***Remove all available HTML tags from string****

// str = "<p><strong><em>Only print this</em></strong></p>"
// console.log(str.replace( /(<([^>]+)>)/ig, ''));

// ** Task  10
// ***round a number to a given decimal places.***

// n1 = 16.765;
// n2 = 12.37982;
// n3 = -9.30974499;

// console.log(n1.toFixed(2));
// console.log(n2.toFixed(2));
// console.log(n3.toFixed(4));

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  11
// program to take input of a Number and find a Mean of All Digits

// let num = "42";
// let sum = 0;
// for(i=0; i< num.length; i++){
//   arrNum = parseInt(num[i])
//   sum += arrNum
// }
// let mean = sum / num.length;
// document.write(`Input: ${num}<br>`)
// document.write(`Output: ${mean}`)

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  12
// ***Write a program that shows the message***

// date = new Date();
// month = date.getDate()
// console.log(month);
// month <= 15 ? document.write("First fifteen days of the month"):document.write("Last days of the month.")

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  13
// ***Write a program that determines the minutes since midnight***

// date = new Date();
// mili = date.getTime();
// document.write("Current Date: "+date+"<br>");
// document.write("Elapsed Milliseconds since January 1, 1970: "+mili+"<br>");
// document.write("Elapsed Seconds since January 1, 1970: "+Math.ceil((mili/1000))+"<br>");
// document.write("Elapsed Minutes since January 1, 1970: "+Math.ceil((mili/1000)/60)+"<br>");

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** Task  14
// ***Create a Date object for the current date and time***

// let date = new Date();
// document.write(date +"<br>");

// getHours = date.getHours();

// date.setHours("Current Date: "+getHours - 1)
// document.write("1 hour ago: "+date);

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_


// ** 15
// *** Write a program to ask the user about his age. Calculate and show his birth year\

// dob = +prompt("Enter your age")
// var date = new Date();
// dobYear = date.getFullYear() - dob;
// document.write("Your age is: "+ dob+"<br>")
// document.write("Your birth year is "+dobYear)

// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_
// _-_-*_-_-_*-_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-*_-_-_*-_-_*-_-_

