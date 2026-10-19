// alert("hello world");
// alert("second line");

// Right variable name 

// var _helloMsg = "hello from variable";
// var $helloMsg = "hello from variable";
// var helloMsg = "hello from variable";
// var hello_Msg = "hello from variable";
// var helloMsg123 = "hello from variable";
// var text = "hello";
// alert(text);

// Wrong variable name 

// var text "hello";
// text = "hello";
// int text = "hello";
// string text = "hello";
// variable text = "hello";
// var hello-Msg = "hello from variable";
// var 213helloMsg = "hello from variable";

// alert(hello_Msg);
// alert("text");

// case sensitive
// var text = "hello";
// var Text = "hello world";
// alert(text) 
// alert(Text) 

// concate / addition
// var text = "hello";
// var numbera = 12;
// var numberb = 10;
// alert(text + numbera);
// alert(numbera + numberb); 

// user input

// var name = prompt("Enter You Name");
// alert(name);

// for Numbers
// var firstNo = Number(prompt("enter first no"))  
// var secondNo = Number(prompt("enter second no"))
// alert(firstNo + secondNo)

// var num = 10;
// var numb = 20;
// alert(num + numb) // 1020

// var userName = prompt("Enter Your Name");
// alert(userName);

// var num1 = Number(prompt("Enter First No")); 
// var num2 = Number(prompt("Enter Second No"));

// var num1 = +prompt("Enter First No"); 
// var num2 = +prompt("Enter Second No");
// alert(num1 + num2);

// Take the user’s age in years as input and
// output their year of birth.

// var currentYear = 2026;
// var userAge = Number(prompt("Enter You Age"));
// var yearOfBirth = currentYear - userAge;

// alert(yearOfBirth)

// userAge = 10;
// currentYear = 2026;

// YOB = currentYear - userAge;


// var text = "hello";
// var text1 = "world";

// Expression

// var num1 = Number(prompt("Enter 1st Number")); 
// var num2 = Number(prompt("Enter 2nd Number")); 

// console.log("Add = " , (num1 + num2)); 
// console.log("Sub = " + (num1 - num2)); 
// console.log("Mul = " + (num1 * num2)); 
// console.log("Div = " + (num1 / num2));
// console.log("Rem = " + (num1 % num2)); 

// bodmas
// var calculate = (3 - 2) * 3 / 4 + 5;
// console.log(calculate)

// Data Types
// 1 string = "text"
// 2 Numbers = 23 ,4 ,5
// 3 Boolean  = true ,  false
// 4 null
// 5 undefined

// var text = "hello world";
// var num;
// console.log(typeof num) // undefined 
// var text = 10;
// console.log(text) // 10
// text = 12
// console.log(text) // 12
// text = "test";
// console.log(text) // test
// text = true;
// console.log(text) // true

// var text = null;
// console.log(text)
// text = "js"
// console.log(text)

// comparison operators

// Greater Then > 
// console.log(6 > 5) 
// Less Then <
// console.log(6 < 5) 
// Greater Then Equal >=  
// console.log(6 >= 5) 
// Less Then Equal <= 
// console.log(6 <= 5) 
// Not equal != 
// console.log(6 != 5) true
// 2 == vs 3 ===

//    console.log("3" == 3); true
//    console.log("3" === 3); false

// Logical operators
// && ||
// && needs both condition true
// || needs any one condition true
// var a = 4;
// var b = 2;
//          // 4   2    4   2
// console.log(a < b || a > b) // true
         // false    true 


// var a = prompt("enter no"); "5.3"
// console.log(parseFloat(a)); // convert string to number 5
// console.log(parseInt(a));   // convert point value to number 5

// var age = 5;

// if(age > 10){
//     console.log("age is greater then 10")
// }else{
//     console.log("age is less then 10")
// }

// var marks = prompt("enter no");

// if(marks >= 80){
//     console.log("A+ grade")
// }else if(marks >= 70){
//     console.log("A grade")
// }else if(marks >= 60){
//     console.log("B grade")
// }else if(marks >= 50){
//     console.log("C grade")
// }else{
//     console.log("Fail")
// }





// var day = "monday";

// if(day == "saturday" || day == "sunday"){
//     console.log("week end")
// }else{
//     console.log("week day")
// }












// ATM

// var withdraw = prompt("enter amount");
// var balance = 5000;
// if(withdraw <= 0){
//     console.log("invalid amount")
// }else if(withdraw > balance){
//     console.log("Insufficient balance")
// }else if(withdraw % 500 !== 0){
//     console.log("enter multple of 500")
// }else{
//     console.log("payment successfull")
//     console.log("final balance = " ,  balance - withdraw)
//     console.log("Withdrawal amount = " , withdraw)
// }


// if(!true){
//     console.log("hello")
// }else{
//     console.log("world")
// }

// looping

// start 1, end 10, plus 1,
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// 1 - for loop,
// 2 - while loop,
// 3 - do while loop

// 1 - for loop,
// for(start ,  end , increament/decreament){
//     code
// }

// for(var i = 1; i <= 10; i++){
//     console.log(2 , ' x ' , i , " = " , 2 * i)
// }

// var i = 1;
// while(i <= 10){
//     console.log(2 , ' x ' , i , " = " , 2 * i); 
//     i++; 
// }

// var i = 1;
// do{
//     console.log(2 , ' x ' , i , " = " , 2 * i);
//     i++;
// }while(i <= 10);






// var a = 2;
// var b = 1;
// b += 2;

// console.log(b)

// function print() {
//     console.log("Hello world 1");
//     console.log("Hello world 2");
//     console.log("Hello world 3");
//     console.log("Hello world 4");
//     console.log("Hello world 5");
// }

// print();
// print();

    // console.log("Hello world 1");
    // console.log("Hello world 2");
    // console.log("Hello world 3");
    // console.log("Hello world 4");
    // console.log("Hello world 5");

    // console.log("Hello world 1");
    // console.log("Hello world 2");
    // console.log("Hello world 3");
    // console.log("Hello world 4");
    // console.log("Hello world 5");

    // console.log("Hello world 1");
    // console.log("Hello world 2");
    // console.log("Hello world 3");
    // console.log("Hello world 4");
    // console.log("Hello world 5");

// function sayHello(){
//     console.log("Hello World 1");
//     console.log("Hello World 2");
//     console.log("Hello World 3");
//     console.log("Hello World 4");
//     console.log("Hello World 5");
//     console.log("=============");
// }

// sayHello();
// sayHello();

// var a = 10;
// var b = 5;
// console.log(a + b);

// function add(){
//     var a = 10;
//     var b = 5;
//     console.log(a + b);
// }
// add();

// function sub(){
//     var a = 10;
//     var b = 5;
//     console.log(a - b);
// }
// sub();

// function mul(){
//     var a = 10;
//     var b = 5;
//     console.log(a * b);
// }
// mul();

// function div(){
//     var a = 10;
//     var b = 5;
//     console.log(a / b);
// }
// div();

// function print(name){
//     console.log("hello = " , name)
// }

// print("ali");
// print("ahmed");
// print("hamza");

// function add(a , b){
//     console.log(a + b);
// }
// add(10 , 5) // 15
// add(2 , 3) // 5
// add(4 , 3) // 7
// add(4 , 5) // 9

// function Statement/Declaration
// function print(){
//     console.log("hello")
// }
// print();

// function Expression
// var print = function(){
//     console.log("hello")
// }
// print();

// function Expression
// var add = function(a , b){ 
//     console.log(a + b);
// }
// add(10, 5); 

// var a = 10;
// a = 12;
// let b = 12;
// b = 15;
// const c = 15;
// c = 20;

// console.log(c)

// Hoisting

// console.log(a) // undefined
// console.log(b) // undefined
// console.log(c) // undefined

// var a = 10;

// var b = 12;

// var c = 15;

// console.log(b) // error
// const b = 12;
// const c = 15;
// console.log(c)


// function print(){
//     console.log("hello 0")
//     console.log("hello 1")
//     return;
//     console.log("hello 2")
//     console.log("hello 3")
//     console.log("hello 4")
// }
// print();

// function add(a , b){
//     return a + b; // 15
// }
// console.log(add(10 , 5)) 


// Recursion
// function count(n){
//     if(n === 0){
//         return;
//     }    
//     console.log(n);
//     count(n - 1);
// }
// count(5)

// Array

// var fruits = ["mango", "banana", "apple", "grapes"];
// console.log(fruits[3])

// console.log(fruits[0] , fruits[1] , fruits[2]); // mango banana apple

// Array Methods
// fruits.push("orange"); // add new element at the end
// console.log(fruits)

// fruits.pop(); // remove last element
// console.log(fruits)

// fruits.shift(); // remove first element
// console.log(fruits) 

// fruits.unshift("pineapple"); // add new element at the start
// console.log(fruits)

// var fruits = ["mango", "banana", "apple", "grapes", "orange", "kiwi", "watermelon", "papaya", "pear", "peach"];
// console.log(fruits.indexOf("watermelon")) // 5

// var arr = ["mango", "banana", "apple", "grapes", "orange", "kiwi", "watermelon", "papaya", "pear", "peach"];

// var students = ["ali", "ahmed", "hamza", "umer", "bilal", "hassan", "saad", "umer", "bilal", "hassan"];
// // for of loop
// for(var name of students){
//     console.log(name)
// }

// var students = ["ali", "ahmed", "hamza", "umer", "bilal", "hassan"];
// // var marks = [80, 90, 70, 60, 50, 40];

// for(var i = 0; i <= 5; i++){
//     console.log(students[i])
//     // console.log(students[i], " = " , marks[i])
// }

// var students = ["ali", "ahmed", "hamza", "umer", "bilal", "hassan"];
// var a = 12;
// console.log(Array.isArray(a)) // false
// console.log(Array.isArray(students)) // 

// document.getElementById("hello").textContent = "HTML";
// document.getElementById("hello").style.color = "red";
// document.getElementById("hello").style.fontSize = "20px";
// document.getElementById("hello").classList.remove("box");
// document.getElementById("hello").classList.add("active");

// document.getElementsByTagName("p")[0].textContent = "HTML";

// document.getElementsByClassName("box")[0].style.color = "red";

// document.getElementById("hello").style.fontSize = "20px";
   

// document.querySelector("p").textContent = "JS";
// document.querySelector(".box").textContent = "JS";
// document.querySelector("#hello").textContent = "JS";

{/* <div id="box"></div> */}

// document.querySelector("#box").style.height = "200px";
// document.querySelector("#box").style.width = "200px";
// document.querySelector("#box").style.backgroundColor = "red";
// document.querySelector("#box").style.border = "2px solid black";
// document.querySelector("#box").style.position = "absolute";
// document.querySelector("#box").style.left = "100px";
// document.querySelector("#box").style.top = "100px";

// document.querySelector("#box").style.cssText = `
// height: 200px;
// width: 200px;
// background-color: red;   
// `

//  <input type="text" id="input" placeholder="Type Text">
//  <button onclick="add()">Add Text</button>

//  <div id="box" class="new">
//  </div>

// let box = document.querySelector("#box")
// console.log(box.classList.contains("old")) // true

// function add(){
//     // select input
//     let userInput = document.querySelector("#input");
//     // create p tag
//     let para = document.createElement("p");
//     // get value from input and set it to p tag
//     para.textContent = userInput.value;
//     userInput.value = "";
//     // select box
//     let box = document.querySelector("#box");
//     // append p tag to box
//     box.appendChild(para);
// }
// Array
// let students = ["ali", "ahmed", "hamza", "umer", "bilal", "hassan"];


//  <div id="box" class="new">
//  </div>

// let box = document.querySelector("#box")

// console.log(box.classList.contains("new")) // true


// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student)) 

// Object

// let student = {
//     name: "ali",
//     age: 20,
//     rollNo: 123,
//     city: "karachi",
// }
// // javascript object notation - JSON
// let data = JSON.stringify(student); // convert object to string
// console.log(data) // 

// let jsonData = '{"name":"ali", "age":20, "rollNo":123, "city":"karachi"}';

// let changeToObject = JSON.parse(jsonData); // convert string to object
// console.log(changeToObject) 

// student.city = "lahore"; // update
// student.country = "Pakistan" // add new property

// console.log(student.country)

{/* <button onclick="show()">Show Alert</button> */}

// function show(){
//     alert("hello world");
// }
// prompt("enter your name") // input box

{/* <button id="btn">Show Alert</button> */}

// let button = document.querySelector("#btn");

// button.addEventListener("click", function(){
//     alert("hello world");
// })

$("p").text("Hello Students!");

