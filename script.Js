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
