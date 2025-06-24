// string , template literals

// string - string is a sequence of characters- letter,numbers,symbols

let string1 = "Hello";
let string2 = "world";
let string3 = `12345`;

console.log(string1, string2, string3);

let sentence1 = "it's a good day";
let sentence2 = "its a good' \"day";
let sentence3 = "this is line one. \nthis is line two";
console.log(sentence2);
console.log(sentence3);

let name = "c hari babu";
let age = 26;
let oldStyle = "My name is " + name + " and I am " + age + " " + "years old";
console.log(oldStyle);

let newStyle = `My name is ${name} and I am ${age} years old`;
console.log(newStyle);

// template literal
let multiline = `
Hello ${name},
welcome to" ' javascript.
i am ${age} years old!
`;
console.log(multiline);
