

// short circuiting -- javascript stops evaluating once the result is determined
// default values, conditional execution, avoiding errors

// or -- || 

//   or operator first truthy value
//   null, undefined, NaN, "",0,false -- falsy values


// console.log("" || false)


//  && 

// console.log( true && "" && true || "truthy" || null )


// nullish coalescing operator ??

let userId=0

//  null undefined 

// either truthy values, false ,NaN , 0,""

// console.log(null ?? undefined ?? false ?? null)

let arr=[1,2,34]

let userData1={
    name:"hari",
    details:{
        dept:["IT","manager"]
    }
}
let userData2={
    name:"manoj",
    age:24
}

let arr2=[userData1,userData2,{name:"bharath",age:23}]

// arr2.forEach((e)=>{
//     console.log("age doesn't exist" ,e.name)
// }) 


console.log(userData2?.details?.dept?.[0] ?? "department doesn't exist")