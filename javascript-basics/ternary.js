// ternary operator
// shortcut for if..else statement

let score = 70;
let result;

if (score >= 60) {
  result = "pass";
} else {
  result = "fail";
}

// syntax
// condition ? expressionIfTrue : expressionIfFalse
// evaluates the condition
//

let result2 = score >= 60 ? true : "fail";

let isLoggedIn = true;
let message = isLoggedIn ? "welcome user" : "please log in";
console.log(message);

// nested ternary operators

let marks = 50;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "F";
console.log(grade);

let a = 5;
let b = 3;
let c = 6;

let x = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log("asdfasdfds" ? "this" : "that");
console.log(x);
