// 1) Write a program that checks whether a number is even or odd.

// const num = prompt();

// if (num % 2  === 1) {
//     console.log("Number is odd");
// } else {
//     console.log("Number is even"); 
// }


// 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".

// const age = prompt();

// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible");
// }


// 3) Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }


// 4) Print even numbers between 1 to 20 using a while loop.

// let i = 1;

//   while (i <= 20) {
//     if (i % 2 === 0) {
//       document.write(i + "<br>");
//     }
//     i++;
//   }


// 5) Print the reverse of a given string using a for loop.

// const fname = "Hamza";
// let reversed = "";
// for (let i = fname.length - 1; i >= 0 ; i--) {
//     reversed += fname[i];    
// }

// console.log(reversed);


// 6) Write a function that adds two numbers and returns the result.

// let a = 5;
// let b = 10;

// function add() {
//    return a + b;
// }
// document.write(add());


// 7) Write a function that returns the factorial of a number.

// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// let num = prompt();

// console.log("Factorial of " + num + " is: " + factorial(num));

// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").

// function palindrome(str) {
//     str = str.toLowerCase().replace(/\s+/g, '');

//     let reversed = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return str === reversed;
// }


// let word = "Madam";
// // let word = "hamza";


// if (palindrome(word)) {
//     document.write(word + " is Palindrome");
// } else{
//     document.write(word + " is not Palindrome");
// }


// 9) Create an object student with the following properties:
// name, rollNo, marks, isPassed

// const student = {
//     name: "Hamza",
//     rollNo: 40006,
//     marks: 78,
//     isPassed: true,
// }

// console.log(student.name);
// console.log(student.rollNo);
// console.log(student.marks);
// console.log(student.isPassed);



// 10) Access the properties of the student object using dot and bracket notation.

// let student = {
//     name: "Hamza",
//     rollNo: 40006,
//     marks: 88,
//     isPassed: true,
// }


// console.log(student.name);
// console.log(student.rollNo);
// console.log(student.marks);
// console.log(student.isPassed);

// console.log(student["name"]);
// console.log(student["rollNo"]);
// console.log(student["marks"]);
// console.log(student["isPassed"]);


// 11) Add a method inside the student object that prints:
// "Hello, I am [name]"

// const student = {
//     name: "Hamza",
//     rollNo: 40006,
//     marks: 88,
//     isPassed: true,
//     sayHello: () => {
//         document.write("Hello, I am " + student.name);
//     },
// }
//  student.sayHello();

// 12) Create a function that takes an object and prints all keys and values using a loop.

//  function printKeys(obj) {
//     for (const key in obj) {
//         document.write(key + ":   " + obj[key] + "</br>");
//     }
//  }

// const student = {
//     name: "Hamza",
//     rollNo: 40006,
//     marks: 88,
//     isPassed: true,
// }
// printKeys(student);


// 13) Create an array of your favorite fruits.
// 14) Add a new fruit to the array.
// 15) Remove the last fruit from the array.
// 16) Check if "banana" is present in the array using .includes().

// const fruits = ["Mango","Banana","Orange","Peach"];
// fruits.push("Apple");

// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.includes("Banana"));


// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.

// const numbers = [2,3,5,6,7];
// const doubled = numbers.map(function(num) {
//     return num * 2;
// });
// console.log(doubled);

// 18) Create an array of ages. Return only those who are 18 or older.

// const ages = [12,15,17,28,23,29,34];
// let adults = ages.filter(function(age){
//     return age >= 18;
// });
// console.log(adults)

// 19) Use .find() to get the first number greater than 10 from an array.

// let numbers = [2,5,18,19,23,];

// let b= numbers.find(function(num) {
//     return num > 10;
// }) 
// document.write("first number greater than 10 is <b>" + b + "</b>.");


// 20) Use .forEach() to print every name from an array of names.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.forEach(function(student){
//     document.write(student.name + "</br>");
// })


// 21) Use .map() to return an array of only student names.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.map(function(stdName){
//     document.write(stdName.name + "</br>");
// })


// 22) Use .filter() to return students who scored more than 50.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let aboveFifty = students.filter(function(student){
//     return student.marks > 50;
// })

// document.write(aboveFifty);

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// const passedStudents = students.filter(function(student) {
//   return student.marks > 50;
// });
// passedStudents.forEach(function(student){
//     document.write(student.name + ":    " + student.marks + "</br>")
// })

// 23) Use .find() to get the student whose name is "Zara".

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let zara = students.find(function(student){
//     return student.name === "Zara";
// })
// if (zara) {
//     document.write("Found: </br>" + zara.name + ": " + zara.marks);
    
// } else {
//     document.write("Not Found!");
    
// }

// 24) Use .forEach() to print each student’s name and marks.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.forEach(function(student){
//     document.write("Name:   " + student.name + ", Marks:    " + student.marks + "</br>");

// })

// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// → Output: [4, 16, 36, 64]

// const arr = [2, 4, 6, 8];
// const squared = arr.map(function(num){
//     return num * num;
// }) 
// document.write(squared);


// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

// const names = ["Ali", "Zara", "Umar", "Ahmed"];

// names.forEach(function(name){
//     document.write(name + "</br>");
// })


// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.

// const ages = [12, 25, 17, 20, 16, 30];

// const aboveEighteen= ages.filter(function(age){
//     return age > 18;
// })
//     document.write(aboveEighteen);


// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].

// const fruits = ["banana", "mango", "grapes", "apple"];

// const hasApple = fruits.includes("apple");
// // document.write(hasApple);

// if (hasApple) {
//     document.write("Apple Exist in list.");
// } else {
//     document.write("Apple is not exist in list.");
// }


// 29) From the following list, find the first student who scored more than 90:
// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ];

// const highScorer = students.find(function(student){
//     return student.marks > 90;
// })
// if (highScorer) {
//     document.write(highScorer.name + ": " + highScorer.marks);
// } else {
//     document.write("No any student who scored more than 90.");
// }


// 30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750

// const numbers = [200, 150, 300, 100];

// const total = numbers.reduce(function(sum, num){
//     return sum + num;
// })

// console.log(total);

// 31) From this array:
// [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]
// Return a new array of only usernames.

// const userData = [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]

// const usernames = userData.map(function(user){
//     return user.username + "</br>"; 
// })

// document.write(usernames);



// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// → Output: [1, 3, 5]
// const numbers = [1, 2, 3, 4, 5, 6];

// const oddNumbers = numbers.filter(function(num){
//     return num % 2 !== 0;
// })

// document.write(oddNumbers);

// 33) Count how many vowels are present in the string "javascript".

// const str = "javascript";
// const vowel = str.split('').filter(function(char){
//     return ['a','e','i','o','u'].includes(char);
// });
// console.log("Vowel count: " + vowel.length)


// 34) Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]

// Sir ye smjh nahi aa raha 

// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.

// Sir ye smjh nahi aa raha
