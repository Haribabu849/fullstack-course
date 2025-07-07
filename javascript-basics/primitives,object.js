// data types- primitives, objects

// string,number,boolean,null,undefined,symbol,bigint
// objects

// let a="hari"
// let b=3
// let c=a
// c="babu"

// primitives does copy by value

// console.log(a,c)

// let a={
//     name:"hari",
//     age:25
// }

// let c=a

// copy by reference

// // c,a ==> {name:"babu",age:26}

// // console.log(a,c)
// c.name="babu"
// a.age=26
// // console.log(c)
// console.log(a,c)

// let a=[1,2,3]
// let b=a

// // a,b ==> [1,2,5]

// b[2]=4
// a[2]=5

// console.log(a,b)



// let a=2

// function something(b){
//     console.log(b+10)
//     b=4
//     console.log(b)
// }


// // pass by value
// something(a)
// console.log(a)


// pass by reference
let a={name:"hari",age:25}


function something(b){


    b.dept="123"

    console.log(b)
}


something(a)
console.log(a)





