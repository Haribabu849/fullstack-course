// multiline-comments
/*console.log("javascript is interesting");
console.log(2 + 2);
alert("alerting this message"); */

//single line comment

// variables - variables are used to store values and we can use them later

// value - it is a piece of data

// let fullName = "c hari babu";

// let age = 25;

// let anotherVariable = fullName + "'s" + " age is " + age;
// let isElgibleforDriving = age > 18;

// console.log(fullName + "'s" + " age is " + age);
// console.log(age);
// console.log(fullName);
// console.log(fullName);
// console.log(fullName);

// console.log(anotherVariable);

// varibales - naming conventions

//! A-Z,a-z,0-9,$,_
// camel case
// no spaces between
//should not start with number
// shoud not use reserved key words - let ,if,for,const,function
// fullname not equals to fullName alpha not equals to Alpha -- case sensitive
//! use meaningful name

// let full_name = "c hari babu";

// let full Name = "c hari babu";
// let my123FirstJob_1 = "developer";

// let function='some function'

// let let="something"

// let name = "c hari babu";
// let fullName = "c hari babu";
// let job1 = "deverloper";
// let firstJob = "developer";

// a:char,b:int,c:string,d:boolean

// let age = "twenty five";
// age = 26;
// age = 25;
// age = "twenty five";

// javascipt is dynamic typing you don't need to specify the data type of a variable declaring

// console.log("my age is " + age);

// data types
// string, number,boolean,undefined,object,function,symbol,bigint

// typeof- shows the datatype of a value

// let string1 = "some string 123@";
// console.log(string1);
// let number1 = 123;
// console.log(number1);
// let booleanValue = true;
// console.log(booleanValue);
// let string2;
// console.log(string2);

// console.log(typeof string1);
// console.log(typeof number1);
// console.log(typeof false);
// console.log(typeof [1, 2, 3]);
// console.log(typeof { name: "hari", age: 25 });
// console.log(typeof null); //--object

// typeof null object- bug - legacy reasons
// console.log(typeof string2);

// function somefunction() {}
// console.log(typeof function () {});

// variable can be declared by -- var, const, let

// var fullName = "c hari babu";
// console.log(fullName);

// const fullName = "c hari babu";
// console.log(fullName);

// let fullName = "c hari babu";
// console.log(fullName);

// const
// let

// const fullName = "c hari babu";
// const -constant  values
// fullName = "chellola hari babu";

// let fullName = "c hari babu";
// fullName = "chellola hari babu";
// console.log(fullName);

// let someValue;

// console.log(someValue);

// const someValue = undefined;
// someValue = 123;
// console.log(someValue);

// console.log(varibleValue);

// var varibleValue = "123";

// let someValue = "123";

// operators

// arithmetic operator
// assignment operator
// increment & decrement
// comparison operator
// logical operator

// Arithmetic operator- mathematical calculations
// console.log(1 + 1); // addition
// console.log(2 - 1); // subtract
// console.log(2 * 3); // multiply
// console.log(5 / 2); //division

// console.log(3 ** 3); //power

// console.log(5 % 2); // modulus

// operator precedence -- bodmas rule

// console.log(1 + ((3 - 1) * 2) / 2); //(1+2)

// assignment operator

// let a = 2 + 2;
// // combined assignment
// // a= a+2
// a += 2; //6
// // a=a-2
// a -= 6;

// let a = 2;
// a *= 2;
// a **= 4;
// a /= 4;

// console.log(a);

// increment & decrement

// let x = 2;

// console.log("before increment", x);
// console.log("after increment", ++x);
// console.log("post increment", x++);
// console.log(x);
// x=x+1
// x++;
// x++;
// x++;
// // x=x-1
// x--;
// x--;
// x--;

// // pre post

// ++x;
// x++;

// console.log(x++);

// ?comparison operator - returns a boolean value

// console.log(2 > 1); //greater than
// console.log(1 < 3); //lesser than
// console.log(2 <= 1); //less than or equal to
// console.log(2 >= 1); //greater than or equal to
// console.log(2 === "2"); //strict equality - checks data type - it doens't do type coercion
// console.log(2 == "2"); // doesn't check data type
// console.log(2 !== "2"); // strict
// console.log(2 != "2");

// console.log(true == "1");
// console.log(true == 1);
// console.log(false === false);
// console.log(undefined == "undefined"); // null- empty-0  "null"

// logical operator
//  && - and, ||- or , !-not

// console.log(2 > 1 && 2 > 10 && 2 > -1);
// console.log(true && false && true);

// string operators

let firstName = "Hari";
let lastName = " Babu";

// combine strings using +
let fullName = firstName + lastName;
console.log("fullname:", fullName);

let greeting = "Hello";
greeting += " World";
console.log(greeting);
