// if-else- these are used to make decisions in code

/*
syntax
if(condition){
code runs if condition is true
}else if(anotherCondition){
runs if above is flase, but this true
}else{
runs if none of the conditions are true
}
*/

// if

// let age = 18;
// if (age >= 18) {
//   console.log("you are eligible to vote");
//   console.log("you are major");
// }

// if else
// let isRaining = false;

// if (isRaining) {
//   console.log("take an umbrella");
// } else {
//   console.log("enjoy the sunshine");
// }

// if , else if ,else
// let score = 69;

// if (score >= 90) {
//   console.log("grade-a");
// } else if (score >= 80) {
//   console.log("grade-b");
// } else if (score >= 70) {
//   console.log("grade-c");
// } else {
//   console.log("grade-f");
// }

// nested if statements

let user = "Hari";
let password = "1234";
let isAdmin = false;
let isManager = false;

if (user === "Hari") {
  if (password === "1234") {
    if (isAdmin) {
      console.log("you are at admin page");
    } else if (isManager) {
      console.log("you are at manager page");
    } else {
      console.log("you are at user page");
    }
  } else {
    console.log(`${user} incorrect password`);
  }
} else if (user === "amar") {
  if (password === "890") {
    console.log("login successful");
  } else {
    console.log(`${user} incorrect password`);
  }
} else {
  console.log("user not found");
}
