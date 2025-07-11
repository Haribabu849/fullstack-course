


// spread  --> ... spread is used to expand iterables(arrays, objects,string) into individual elements 

// let a=[1,2,3]
// let b=[4,5,6]

// let c=[...a,...b]

// console.log(1,2,3,1,2,3,...a,a)


// let a={name:"hari",age:24}
// let b={name:"babu",...a,some:"asdfsdf"}



// let name="hari"
// console.log(...name,"h","a","r","i")
// console.log([...name])
// console.log(b)


// Rest --> it is used to collect multiple into single array or object


// let data=[1,2,3,4]

// let [a,...c]=data
// // console.log(c)


// let obj1={
//     name:"hari",age:25,dept:"it"
// }

// let {name,...rest}=obj1
// function someFunction(a,b,...c){
//     // console.log(a)
//     console.log(c)
// }


// someFunction(1,2,3,4,5)

// console.log(rest)

let person={
    name:"hari",
    age:24
}

person2={...person,dept:"it"}





