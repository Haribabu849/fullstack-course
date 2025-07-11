//  truthy falsy values

// falsy values
// 6 values
// false,0,null,undefined,NaN,""

// truthy values

// console.log(Boolean(function () {}));

let username = "";

if ("") {
  console.log("username is valid");
} else {
  console.log("username is missing");
}

let cartItems = "0";
if (!cartItems) {
  console.log("you have items in your cart");
} else {
  console.log("your cart is empty");
}

let userid = 0;
let userName = "hari";
let anotherUserId = 1;
let anotherUserName = "amar";
if (userid) {
  console.log("access this page");
}
