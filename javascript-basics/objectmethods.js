

// let userDetails={
//     name:"hari",
//     age:25,
//     department:"IT"
// }

// Object.keys --- gives properties in an array

// console.log(Object.keys(userDetails))

// Object.keys(userDetails).forEach((e)=>{
//     console.log(userDetails[e])
// })

// Object.values --- gives values in an array

// console.log(Object.values(userDetails))

// Object.entries --- gives properties and values in a nested array

// let a=Object.entries(userDetails) // [["name","hari"],["age",25],["department","IT"]]



// console.log(a[1][1])


// Object.freeze(obj)

const data={
    name:"hari"
}

Object.freeze(data)

// frozen.name="hari babu"
// // console.log(frozen)
// frozen.age=25

// console.log(frozen)

// delete frozen.name

// console.log(frozen)

// cannot add new properties
// cannot delete properties
// cannot modify existing values

// console.log(frozen)

// Object.seal(obj)

const sealed={
    name:"hari"
}

Object.seal(sealed)

sealed.name="hari babu"

// console.log(sealed)
// sealed.age=24
// console.log(sealed)
// delete sealed.name
// console.log(sealed)

// cannot add new properties
// cannot delete properties
// can modify existing properties

// Object.preventExtensions(obj)

const limited={
    name:"hari"
}

Object.preventExtensions(limited)

limited.age=25
limited.name="babu"


// console.log(limited)

delete limited.name

// console.log(limited)

// cannot add new properties
// can modify existing properties
// can delete properties


// data.name="babu"
// data.age=25
// console.log(data)

// Object.isFrozen(),Object.isSealed(),Object.isExtensible()
let data2={
    age:25
}


// console.log(Object.isFrozen(data)) // to check if proerties values cannot be added and changed
// console.log(Object.isSealed(data)) // to check if properties values can be changed
// console.log(Object.isExtensible(data2)) //to check if we can add new properties

// obj.hasOwnProperty(property)
// console.log(data2.hasOwnProperty("age"))


// Object.assign()

// let obj1={a:1,d:2}
// let obj2={b:3,d:4}

// let obj4={
//     name:"hari",
//     age:22,
//     name:"hari babu"
// }
// console.log(obj4)
// // Object.assign(target,..sources)
// const obj3=Object.assign(obj1,obj2,{b:9})

// console.log(obj3,{a:2,b:2,b:3,d:4,b:9,b:2})


// let obj={
//     name:"hari",age:25
// }

// let a=Object.entries(obj)
// console.log(a)
// Object.fromEntries()

// let b=[["name","value"],["age",25],["department","IT sector"]]

// console.log(Object.fromEntries(b))

let b={name:"hari",age:25}


// // Object.getOwnPropertyDescriptors(obj)
// Object.freeze(b)

// console.log(Object.getOwnPropertyDescriptors(b))









