

// // functions - reusable block of code 

// // function declarations
// // function expressions
// // arrow functions

// // function functionName(){}
// // calling a function function()

// function sayHello(){
//     return "hello"    
// }

// console.log(sayHello())

// // function parameters (parameters)

// function greet(name){
//     return `Hi ${name}`    
// }
// // arguments -> greet(arguments)

// let someName="manoj"
// greet(someName)
// console.log(greet("amar"))
// let a=greet("charan")
// console.log(a)

// function add(a,b,c){
//     console.log(c)
//     return a+b+c
// } 

// console.log(add(2,3,2,2,3))
// console.log(add(4,10,3))

// function isEligibleToVote(age){
//     if(age>=18){
//         return "yes"
//     }

//     return "no"
// }


// function square(a){
//     return a*a*a 
// }

// console.log(isEligibleToVote(24))
// console.log(square(3))

// function isEven(a){
//     return a % 2 === 0 
// }

// console.log(isEven(2))


// // postive 

// function isPositive(a){
//     return a > 0  
// }

// // equality - === , ==, !==,!=, <=,>=0,

// console.log(isPositive(2))

// function compare(a,b){
//     // return a>b ? `${a} is greater than ${b}`: `${b} is greater than ${a}`
//     // if(a>b){
//     //     return `${a} is greater than ${b}`
//     // }else if (a===b){
//     //     return 'both are equal'
//     // }else{
//     //     return `${b} is greater than ${a}`
//     // }
//     return a>=b ?a===b?"both are equal": `${a} is greater than ${b}`: `${b} is greater than ${a}`
    
// }

// console.log(compare(8,7))


// function expressions - cannot be hoisted
// hoisting


// console.log(add(2,3))
// function add(a,b){
//     return a+b
// }

// function created without a name
// const subtract=function (a,b){
//     return a-b;
// }

// console.log(subtract(4,2))

// arrow functions - shorter syntax(short and easier way to create functions)

const add=(a,b)=>{
    return a+b
}

const square = a =>  a*a


const cube = (a,b) =>{

   return a>b ? "a is greater than b":"b is greater than a"

} 

console.log(add(2,3))
console.log(square(3))
console.log(cube(3,2))

// functions calling another functions

function greet(){
    let createdTime=new Date("26 june 2025 20:00:00")
    // console.log(currentTime)

    let current =new Date()

    let time=current.getHours() -createdTime.getHours()

    return ` created before ${current.getHours()} hours ${current.getMinutes()} minutes, ${current.getSeconds()}`
    // let minutes=currentTime.getMinutes()
    console.log(time)


    // console.log(time)
    // console.log(time,"hours",minutes,"minutes",currentTime.getSeconds(),"seconds",currentTime.getMilliseconds())

    // if(time>6 && time <12){
    //     return "morning"
    // }else if (time >12 && time <4){
    //     return "evening"
    // }else{
    //     return "night"
    // }
}

function greetUser(name){
    // let x=greet()
    return `good ${greet()}, ${name}!`
}

// console.log(greet())

console.log(greetUser("hari"))


function isEven(n){
    return n%2===0
}

function evenMessage(num){
    if(isEven(num)){
        return num +"  is even"
    }
    return num +" is odd"
}


console.log(evenMessage(3))

let heading =document.querySelector(".display-time")

heading.textContent= greet()

setInterval(()=>{
    heading.textContent=greet()

},1000)

let x=3;
let y=6



let heading2=document.querySelector("h2")
heading2.textContent=x


let button=document.querySelector("button")
let heading3=document.querySelector("h3")
button.addEventListener("click",()=>{
    // console.log(x)
    x++
    heading2.textContent=x

    if(heading3.textContent===""){
        heading3.textContent="insert this content"
        heading3.style.backgroundColor="red"
        heading3.style.width="100%"
        heading3.style.height="100px"
        heading3.style.border="2px solid black"
    }else{
        heading3.textContent=""
        heading3.style.width="34px"
        heading3.style.height="100px"
        heading3.style.border="2px solid black"
    }
    
})






