"use strict"

//zadacha_1

let x = 20;
let y = 58;
let z = 42;
console.log (x + y + z);

//zadacha_2

let q = 60;
let w = 60;
let e = 24;
let r = 365;

console.log ((((r * 25) * e) * w) * q);

//zadacha_3 
// preobrazovanie numberFromString v 2 sposoba
let count = 42 + String;
let numberFromString = String (count);
console.log (typeof count);
console.log (typeof numberFromString);

// preobrazovanie stringFromNumbe v 2 sposoba
let userName = '42' - Number;
let stringFromNumber = Number (userName);
console.log (typeof userName);  
console.log (typeof stringFromNumber);

//zadacha_4

let a = 1;
let chisloVstring = String(a)
let b = 2;
let chisloVstrinng = String(b)
let c = 'белых медведей';
console.log (String(a) + String(b) + c);

//zadacha_5

let textOne = "доступ";
let textTwo = "морпех";
let textThree = "наледь";
let textFour = "попрек";
let textFive = "рубило";
let lengthWords = (textOne + textTwo + textThree + textFour + textFive);
console.log (lengthWords.length)

//zadacha_6

let name = "Kostya";
let age = 25;
let question = false;
console.log ("Variable: ${namee} has type: ${typeof name}");
console.log ("Variable: ${age} has type: ${typeof age}");
console.log ("Variable: ${question} has type: ${typeof question}");

//zadacha_7

//let newUserName = prompt ("Введите ваше имя:");
//alert (newUserName);
//let UserAge = prompt ("Ваш возвраст:");
//alert (UserAge);
//console.log (newUserName + UserAge);