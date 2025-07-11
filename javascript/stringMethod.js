
// string methods


// length property
// let stri="12345"

// console.log(str.length);

// methods
// bracket notation

// console.log(str[4])
// console.log(str[str.length-1])
// console.log(str[10]) // undefined

// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// at -- index based negative indexes work
// console.log(a.at(0))
// console.log(a.at(a.length-1))
// console.log(a.at(-4))
// console.log(a[a.length-4])
// console.log(a.at(10)) // undefined

// charAt
// console.log(a.charAt(-1)) // doesn't work
// console.log(a[a.length+1])
// console.log(a.charAt(10))// ""

// // concat 
// let a="abcde"
// let b="something"
// console.log("abcde".concat("fgh",1,"123"),a+"fgh",a.concat(b),a+b)

// console.log("abcde".at(-1))
// console.log("ksdjflkjsdf".charAt(1))


// startswith

// let str="abcsfasfdasd"

// console.log(str.startsWith("a"),str.startsWith("bc"))
// console.log(str.startsWith("b",1),str.startsWith("cd",2))

// // endsWith

// console.log(str.endsWith("e"),str.endsWith("de"))
// console.log(str.endsWith("c",3),str.endsWith("bc",3))

// console.log(str.includes("f",8))

// if(email.includes("@") || email.includes(".")){
//     console.log("invalid email please a valid email")
// }


// indexOf

// let str="abfcdefdd"

// console.log(str.indexOf("f"))
// console.log(str.indexOf("d",4))
// console.log(str.indexOf("x"))

// // lastIndexOf

// console.log(str.lastIndexOf("f"))
// console.log(str.lastIndexOf("1"))
// console.log(str.lastIndexOf("f",3))

// let a="plese enter the password"

// console.log(a.padStart(4,"*"))

// console.log(a.padEnd(a.length+5,"."),a.length)

// let first="123"
// console.log(first.repeat(10))
// console.log(first.repeat(0),"")  

let a="123453"

// console.log(a.replace("3","123"))
// // regex
// console.log(a.replace(/3/g,"abc"))

// console.log(a.replaceAll("3","123"))

// let a="01234"
// console.log(a.slice(2))
// console.log(a.slice(1,3)) // index based- doesn't includes 3rd index 
// console.log(a.slice(0,-1))
// console.log(a.slice(0))

// let a="01234"
// console.log(a.substring(1,3)) //negative index doesn't work
// console.log(a.substr(1,3))


// let str="red,blue,green"
// console.log(str.split(""))
// console.log(str.split())
// console.log(str.split("s"),str.split("n"),str.split(","))

// let a="abc"
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())
// console.log(a.slice(1).toUpperCase())


// let a="   123   "
// console.log(a.trimStart())
// console.log(a.trimEnd())
// console.log(a.trimStart().trimEnd())
// console.log(a.trim())

let d="1a234A*"
console.log(d.charCodeAt(6))






