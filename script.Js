// var num = [10, 15, 20, 25 ,20];
// var greater = 0;
// for(var i = 0; i <num.length; i--){
//     if(num[i] > greater){
//         greater = num[i]
//     }
// }    
// console.log(greater)    


// var arr = [1, 2, 3, 4, 5];
// for (var i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }


// var arr = [3,6,7,9,3,8,0,6,7,8,7,7];
// var user = +prompt("Enter any number");
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === user) {
//         count++;
//     }
// }
// alert("The number " + user + " appears " + count + " time in array");


// var name = "Sarjeel"

// for(var i = name.length -1; i >= 0; i--){
//     console.log(name[i])
// }


// var arr = [
//     [   ["Sarjeel"],
//         [24]
//     ],
//     [
//         ["Usama"],
//         [24]
//     ]
// ]

// for(var i = 0; i<arr.length; i++){
//     for(var j = 0; j<arr[i].length; j++){
//             console.log(arr[i][0])
//     }
// }

// var arr = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];  
// }
// var average = sum / arr.length;
// console.log("Average:", average);

// method splice

// var arr = [10,20,30,40,50]
// arr.splice(2,1,30)
// console.log(arr)

// var arr = [1,2,3,5]
// arr.splice(3,0,4)
// console.log(arr)

// var arr = ["a","b",'c','d']
// arr.splice(1,1,'x')
// console.log(arr)

// var arr = [100,200,300,400,500]
// var arr2 = arr.slice(1,4)
// console.log(arr2)

// var arr = [10,20,30,40,50]
// var arr2 = arr.slice(2,5)
// console.log(arr2)

// var arr = [10,20,30,40,50]
// arr.splice(1,3)
// console.log(arr)

// var arr = [1,2,3];
// var arr1 = [4,5,6];
// console.log((arr.slice(0,3)).concate(arr1.slice(0.3)))

// var arr = [1,2,3,4];
// var arr1 = arr.slice(0,5)
// arr1.splice(4,0,5)
// console.log(arr)

// var arr = [10,20,30,40,50];
// arr.splice(0,2)
// console.log(arr)

// var arr = [1,2,3,4,5]
// arr.splice(0,2,4,1,)
// console.log(arr)

// nested forloops & arrays

// var row = 3;
// var coloum = 3;


// for (var i = 0; i < row; i++) {
//        var star = "";
//     for (var j = 0; j < coloum; j++) {
//         star += "*"
//     }
// }console.log(star)

// var row = 3
// var col = 3
// var line = 1;

//     for(var i = 0; i < row; i++){
//         var count = "";
//         for(var j = 0; j < col; j++){
//             count += line;
//             line++; 
//         }
//         console.log(count)
//     }

// var row = 3
// var col = 1
// var line = 1;

//     for(var i = 0; i < row; i++){
//         var count = "";
//         for(var j = 0; j < col; j++){
//             count += line * 3 + " ";
//             line++; 
//         }
//         console.log(count)
//     }


// var row = 3;
// var col = 3;
// var line = 1;

// for (var i = 0; i < row; i++) {
//        var star = "";
//     for (var j = 0; j < col; j++) {
//         star += "*";
//         line++ 
//     }
// }console.log(star)


// Marksheet using loop
// var subjects = +prompt("Enter")
// var name = prompt("Enter your name");
// var subNames = +prompt("Enter length of Subjects")

// for(var i = 0; i < subjects; i++){
//     if(isNaN())
// }


// // var arr1 = []
// var n = 10;

// // Upper part
// for (var i = 1; i <= n; i++) {
//     var line = "";
//     // spaces
//     for (var j = 1; j <= n - i; j++) {
//         line += " ";
//     }
//     // stars
//     for (var k = 1; k <= 2 * i - 1; k++) {
//         line += "*";
//     }
//     console.log(line);
// }

// // Lower part
// for (var i = n - 1; i >= 1; i--) {
//     var line = "";
//     // spaces
//     for (var j = 1; j <= n - i; j++) {
//         line += " ";
//     }
//     // stars
//     for (var k = 1; k <= 2 * i - 1; k++) {
//         line += "*";
//     }
//     console.log(line);
// }









// Switch Statements Marksheet

// var english = +prompt("Enter English marks");
// var sindhi = +prompt("Enter Sindhi marks");
// var urdu = +prompt("Enter Urdu marks");
// var maths = +prompt("Enter Maths marks");

// var total = 400;
// var obt = english + sindhi + urdu + maths;

// console.log("My total marks are " + obt + " out of " + total);

// var percentage = (obt / total) * 100;
// console.log("Percentage: " + percentage + "%");

// // Pass or Fail using switch
// switch (true) {
//     case (percentage >= 50):
//         console.log("Result: Pass");
//         break;
//     default:
//         console.log("Result: Fail");
//         break;
// }

// // Grade using switch
// switch (true) {
//     case (percentage >= 90 && percentage <= 100):
//         console.log("Grade: A");
//         break;
//     case (percentage >= 80 && percentage < 90):
//         console.log("Grade: B");
//         break;
//     case (percentage >= 70 && percentage < 80):
//         console.log("Grade: C");
//         break;
//     case (percentage >= 60 && percentage < 70):
//         console.log("Grade: D");
//         break;
//     case (percentage >= 50 && percentage < 60):
//         console.log("Grade: E");
//         break;
//     default:
//         console.log("Grade: F");
//         break;
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator (+, -, *, /)");

// switch (operator) {
//     case '+':
//         console.log("Result: " + (num1 + num2));
//         break;

//     case '-':
//         console.log("Result: " + (num1 - num2));
//         break;

//     case '*':
//         console.log("Result: " + (num1 * num2));
//         break;

//     case '/':
//         console.log("Result: " + (num1 / num2));
//         break;

//     default:
//         console.log("Invalid operator!");
//         break;
// }


// Date & Time

//  var dayNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "sept", "Oct", "Nov", "Dec"];
//  var now = new Date();
//  var theDay = now.getMonth();
//  var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)

// var month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "sept", "Oct", "Nov", "Dec"];
// // var day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

// var date = new Date ();
// // var day = date.getDay();
// // var date = date.getDate();
// var month = date.getMonth();
// // var year = date.getFullYear();
// // var currentTime = date.getHours();
// console.log(month)

// diff
// var today = new Date();
// var doomsDay = new Date ("Sept 27, 2050");

// var msToday = today.getTime();
// var msdoomsDay = doomsDay.getTime();

// var diff = msdoomsDay - msToday;

// var msDiff = diff / (1000 * 60 * 60 * 24 * 365)

// console.log (msDiff = Math.ceil  (msDiff))


// var today = new Date();
// var birthInput = prompt("Enter your birthdate (e.g. Sept 27, 2002):");
// var birthyear = new Date(birthInput);

// var msToday = today.getTime();
// var msbirthyear = birthyear.getTime();

// var diff = msToday - msbirthyear;
// var msDiff = diff / (1000 * 60 * 60 * 24 * 365);

// console.log("Your age in years:", Math.floor(msDiff));

// var daysToAdd = 10000;
// var futureDate = new Date(msbirthyear + (daysToAdd * 24 * 60 * 60 * 1000));

// console.log("Date after 10,000 days from your birth:", futureDate);

