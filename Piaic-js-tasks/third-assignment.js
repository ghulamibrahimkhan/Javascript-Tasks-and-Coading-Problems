// // **1
// var educationQu = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications:"+ "<br>"+"<br>")
// for(i=0; i<educationQu.length; i++){
//     document.write(educationQu[i] + "<br>")
// }

// ** 2
// let stu_names = ["Michael","John","Tony"];
// let stu_scores = [320,230,480];
// let percentageCal = (score) =>{
//     return ((score / 500)* 100)+"%" 
// }
// for(i=0; i<stu_names.length; i++){
//     document.write("Score of "+ stu_names[i] + " is " + stu_scores[i] + ". Percentage: " + percentageCal(stu_scores[i]) + "<br>")
// }

// ** 3
// let colors = ["Reg","Green","Blue","Orange","Pink"];
// document.write(colors + "<br>");

// let uc1 = prompt("what color you want to add to the beginning");
// colors.unshift(uc1);
// document.write(colors + "<br>");

// let uc2 = prompt("what color you want to add to the end of array");
// colors.push(uc2)
// document.write(colors + "<br>");

// colors.unshift("Dimgray","forestgreen");
// document.write(colors + "<br>");

// colors.shift();
// document.write(colors + "<br>");

// colors.pop();
// document.write(colors + "<br>");

// let x = +prompt("which index you wants to add a color or color name");
// let uc3 = ("what color you want to add to the " + x +" index of array")
// colors[x] = uc3; 
// document.write(colors + "<br>");

// let x2 = +prompt("at which index you wants to delete colors");
// let y = +prompt("how many colors you wants to delete");
// colors.splice(x2,y);
// document.write(colors + "<br>");

// ** 4
// let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// let selectedCities = cities.slice(1,4);
// document.write(selectedCities);

// ** 5
// remove all duplicate items from an array
// arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // ****method 1****
// let x = [...new Set(arr)]
// console.log(x);

// // ****method 2****
// let y = [];
// length = arr.length;
// for (let i=0; i < length; i++) {
//     if (y.indexOf(arr[i]) === -1) {
//         y.push(arr[i]);
//     }
// }
// console.log(y);
// // ****method 3****
// arr.sort();
// z = []
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     if(temp !== arr[i]){
//         z.push(arr[i]);
//         temp = arr[i]
//     }   
// }
// console.log(z);

// ** 6
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["4th","1st","2nd","3rd"];
// o.sort();
// for (let i = 0; i < aCities.length; i++) {
//     document.write(o[i] + " choice is " + aCities[i]+"<br>")
// }

// ** 7
// var a = [10,20,4,40,60,70];
// var b = [1,2,3,4,5,6,7,8,9,10];

// let union = [...b, ...a]
// // union = new Set(union)
// union = [...new Set(union)]
// console.log(union);


// ** 8
// 8(i)
// let counting = [];
// for (let i = 0; i <= 15; i++) {
//     counting.push(i);
// }
// document.write(counting);

// 8 (ii)
// let revCounting = [];
// for (let i = 15; i > 0; i--) {
//     revCounting.push(i);
// }
// document.write(revCounting);

// 8 (iii)
// let even = [];
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0){
//         even.push(i)
//     }    
// }
// document.write(even)


// 8 (iii)
// let odd = [];
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0){
//         odd.push(i)
//     }
// }
// document.write(odd)

//  8 (iv)
// let series = [];
// for (let i = 1; i <= 20; i++) {
//      if (i % 2 === 0) {
//         series.push(i+"k")
//      }
// }
// document.write(series)

// 9 
// let arr = [24, 53, 78, 91, 12];

// // ***Method 1***
// let x = Math.max(...arr)
// console.log(x);

// // ***Method 2***
// let = largeNum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (largeNum < arr[i]) {
//         largeNum = arr[i];
//     }
// }
// document.write(largeNum);

// **10
// numArr = [20,53,78,4,91,12];
// desSort = numArr.sort((a,b)=>{
//     return a - b
// })
// console.log(desSort);

// ***Method 2***

// ** 11
// food = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to the backery what do you want to order sir/mam?").toLocaleLowerCase();
// let index = food.indexOf(userInput);
// index !== -1 ? document.write(food[index]+" is available at index "+ index + " in our bakery"): document.write("We're sorry "+userInput+" is not found in our bakery")


// firstNames =["imran","asif","nawaz"];
// lastNames = ["khan","zardari",'shreef'];
// fullNames = [];
// for (let i = 0; i < firstNames.length; i++) {
//     fullNames.push(firstNames[i]+" "+lastNames[i])
// }
// console.log(fullNames);





































// **Reverse array
// x = [1,2,3]
// x.reverse()
// console.log(x);

// function reverseArr(input) {
//     var xyz = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         xyz.push(input[i]);
//     }
//     return xyz;
// }

// var a = [1,2,3,4]
// var b = reverseArr(a);
// console.log(b);