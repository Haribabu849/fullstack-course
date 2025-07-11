

// javascript Math Object

// Math objects

// Math constant
console.log(Math.PI)
// console.log(Math.SQRT2)
console.log(Math.E)
console.log(Math.PI)

// Rounding methods


// Math.round
console.log(Math.round(1.2)) // nearest value
console.log(Math.round(1.6))
console.log(Math.round(1.49))
console.log(Math.round(3.5))


// Math.floor

console.log(Math.floor(4.9)) // down --4


// Math.ceil

console.log(Math.ceil(4.1)) // up --5

// Math.trunc

console.log(Math.trunc(4.99)) // removes decimal value -- 99

console.log(Math.floor(-4.1)) // -5
console.log(Math.ceil(-2.3)) // -2
console.log(Math.trunc(-1.99))
console.log(Math.round(-4.51))


// Math.random

console.log(Math.random()) // 0-1
console.log(Math.trunc(Math.random()*10 + 1) ) //0-10


// Math.random()*(max - min + 1 ) + min
console.log(Math.trunc(Math.random()*(20 - 10 + 1) + 10))


// Math.min

console.log(Math.min(2,3,1,4,5))
console.log(Math.max(2,10,4,8))

let arr=[1,2,3,45,5,3,33,5,656,6]

console.log(Math.max(...arr))

// Math.pow(base,exponent)

console.log(Math.pow(4,1/2))

// Math.abs()

console.log(Math.abs(-1)) 
console.log(Math.abs(10))

console.log(-1-10)
console.log(Math.abs(-10)- Math.abs(-1))

console.log(Math.sign(-6),Math.sign(5),Math.sign(0))



// Math.sqrt

console.log(Math.sqrt(4))
console.log(Math.sqrt(16))


// Math.cbrt
console.log(Math.cbrt(8))


// console.log(Math.sin(0))
// console.log(Math.cos(0))
// console.log(Math.tan(0))
// console.log(Math.log(10))
// console.log(Math.log10(1000))
// console.log(Math.exp(1)) //e**1==2.718






let fruits=["apple","banana","cherry"]

for(let fruit of fruits){

    if(fruit.startsWith("a")){
        continue
    }
    console.log(fruit)
}

let someString="string"

for(let char of someString){

    if(char==="r"){
        break
    }
    console.log(char)
}


let a=12.340982340809234134123412423423

console.log(a.toFixed(4))

console.log(parseInt(a))
console.log(parseFloat(a).toFixed(2))
console.log(Number(1.221312312.toFixed(4)))
console.log(1.23145123.toPrecision(5))
console.log(Math.round(1.23))