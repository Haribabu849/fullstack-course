

// scoping
// scoping is all about where and all we can access the variables declared


// global scoping -- variables are accessible everywhere inside the code

// let globalVariable="global"//declared in global scope


// // console.log(globalVariable)

// function someFunction(){
//     let functionVariable="function" // declared in function scope
//     console.log(functionVariable)
//     console.log(globalVariable)

//     function anotherFunction(){
//         let anotherVariable="another"
//         console.log(anotherVariable,functionVariable)
//     }

//     // console.log(anotherVariable)

//   anotherFunction()
// }

// someFunction()

// globalVariable="1234"


// console.log(globalVariable);

// console.log(functionVariable)


// let firstName="hari"


// console.log(firstName) 



// function someFunction(){
//    let firstName="amar"

//     // lexical scoping-- the ability for a function or block scope to access variables from its parent scope or variables declared in outer scope 

//     function anotherFunction(){
//         let firstName="something"
//         firstName="charan"
//         // console.log(firstName)
//     }

//     anotherFunction()

//     console.log(firstName)
// }

// someFunction()


// console.log(firstName)


// all variables declared using var is function scoped

// var firstName;
// firstName="firstname"
// console.log(firstName)

// var firstName="hari";

// console.log(firstName)

// console.log(lastName)

// const lastName="babu"


// function123()


// function function123(params) {
  

//     var firstName="amar"

//     console.log(firstName)
    
// }

// let firstName="hari"

// let firstName="firstname"
// firstName="first"

// const lastName="babu"
// lastName="ksdjfds"

// console.log(firstName)


// var firstName="hari"

// var firstName="babu"

// firstName="first"



// console.log(firstName)


// var -- redeclare, reassign , function scoped
// let -- cannot be redeclared, can be reassigned, block scoped
// const-- cannot be redeclared and reasssinged, block scoped


// var firstName="hari"

// let lastName="babu"




// let firstName="hari"
// if("kjasdf"){

//     var lasName="last"
//     firstName="babu"
//     // console.log(firstName)
//     // console.log(lastName)
// }

// console.log(firstName)

// {

//     var lastName="123"
//     let someVariable="234"

// }

// console.log(lastName,someVariable)
// var firstName="hari"

// function someFunction(){
//     var firstName="hari"
// }

// console.log(lasName)


// let x=1



// function someFunction(){
//     let y=2

//     return x+y+z
// }

// function anotherFunction(){
//     let z=3

//     someFunction()
// }





// anotherFunction()

// destructing -- arrays

// let arr=[1,2,3,4,5,6]

// // let someVariable=arr[1]
// // let variable2=arr[2]
// // console.log(someVariable,variable2)

// // let a=arr[0]

// // console.log(a)

// // let [a,b,c,d,e]=arr
// // let [a,b,c,d,e,f]=arr
// let [a,,b,,,c,d]=arr

// let arr=[1,2,[3,4,[5,6]],10,11]



// // console.log(a,b,c,d)

// let [a,b,[c,d,[e,f]],g,h=99]=arr

// console.log(a,c,d,e,f,g,h)


// let data={
//     firstName:"Hari",
//     lastName:"babu",
//     age:24,
//     details:{
//         id:22,
//         department:"IT"
//     },
//     fullName:"c hari babu"
// }


// let firstName1=data.firstName
// console.log(firstName1)


// let {firstName,lastName,age}=data



// console.log(firstName,lastName,age)

// let {firstName:a,lastName:b}=data

// let {firstName:firstName1,details:{id,department:dept1}}=data

// let firstName1=data.firstName
// let someValue=data.details.id
// let dept1=data.details.department




// console.log(a,b)

// console.log(someValue)
// console.log(firstName1)
// console.log(dept1)

// let {fullName="somevalue",firstName}=data


// // let something=`my firstname is ${firstName1} and age is ${someValue}`
// // console.log(something)

// console.log(fullName,firstName)



let a=1
let b=2


let obj2={
    a:3,
    b:4
};


// let {a:c,b:d}=obj1
({a ,b} = obj2)

console.log(a,b)


// let a = 1;
// let b = 2;

// let obj1 = {
//   a: 3,
//   b: 4
// };

// // Reassign using destructuring — allowed if wrapped in parentheses
// ({ a, b } = obj1);

// console.log(a); // 3
// console.log(b); // 4





