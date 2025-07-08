// for of , for in loops

let fruits=["apple","banana","cherry"]

for(let fruit of fruits){
    console.log(fruit)
}

let someString="string"

for(let char of someString){
    console.log(char)
}


// let obj={
//     name:"hari",
//     age:24,
//     dept:"it",
// }

// for(let key in obj){
//     console.log(key, obj[key])
// }

let arr3=[["name","manoj"],["age",25]]


let [key1,value1]=["name","hari"]

for(let [key,value] of arr3){
    console.log(key,value)
}


let arr4=[{name:"hari",age:25},{name:"bharath",age:24}]


for(let {name,age} of arr4){
    console.log(`${name} is ${age} years old`)
}
