// "use strict";

// Object

// an object is a collection of key-value pairs - an object is a type of data in javascript used to store related data or information

// let person1Name="hari"
// let person1Age=26
// let person1Address="hyderabad"

// let person2Name="amar"
// let person2Age=24
firstName="hari"

const person1={
    firstName:"hari",
    lastName:"babu",
    age:26,
    country:"india",
    someProperty:"some value",
    arr:[1,2,3,4,5],
    motherDetails:{
        name:"Anusuya",
        age:50,
        country:"india",
        hobbies:{
            hobby1:[{name:"asdlfklsdf",data:"lsdjfljsadf"},"writing"],
        }
    },
    fullName:function(){
        return this.firstName + " " + this.lastName;
    },
    details2:()=>{
        return `my name is ${this.firstName} and my age is 25`},
    details3(){
        return `my name is ${this.firstName} and my age is 26`
    },
    firstName:"haribabu"
}

person1.firstName="hari" // changing the value of a property in an object



console.log(person1.firstName)

let person2={
    name:"amar",
    age:24,
    country:"india"
}
console.log(person1.motherDetails.hobbies.hobby1[0].name) // accessing the nested properties of an object using dot notation

// dot notation

let someProperty="age"

console.log(person1.name, person1.someProperty, person1.country) // accessing the properties of an object using dot notation


console.log(person2[someProperty], person2["name"]) // accessing the properties of an object using bracket notation

// update
person1.name="hari babu" // changing the value of a property in an object

person1.perviousCity="chittoor"
person1["city"]="tirupati"

person1.city="hyderbad"

console.log(person1)

delete person1.city

console.log(person1)


let car={}

car.brand="tata"
car.model="nexon"
car.year=2024
car["color"]="red"
console.log(car)


let movie={
    title:"RRR",
    "release Year":2022,
}


console.log(movie["release Year"]) // accessing the property using bracket notation


let productDetail={
    name:"iphone 14",
    price:100000,
    brand:"apple",
    color:"black",
    isAvailable:true,
    rating:4.5,
    reviews:["good","bad","average"],
    comments:[{name:"amar", comment:"good phone"},{name:"hari", comment:"bad phone"}],
    specifications:{
        ram:"6GB",
        storage:"128GB",
        camera:"12MP"
    },
    key:"some value"
}

// let showData=["name","price","brand"]

// // console.log(productDetail)

// for(let key in productDetail){

//     //key="name"
//     // key="price"
//     // key="brand"

//     if(showData.includes(key)){
//     console.log(key, ":", productDetail[key]);

//     }

    
// }

// let fullName1="hari"
let fullName="babu"

let bankAccout={
    fullName1:fullName,
    fullName:fullName,
    //fullname,
    accountNumber:"1234567890",
    balance:100000,
    deposit(amount){
        this.balance =this.balance + amount;
        return `Deposited ${amount}. New balance is ${this.balance}`;
    },
    withdraw:function(amount){
        if(amount > this.balance){
            return "Insufficient balance";
        }
        this.balance -= amount;
        return `Withdrew ${amount}. New balance is ${this.balance}`;
    },
    chekBalance:function(){
        return `Current balance is ${this.balance}`;
    },
    
}

let bankAccout2={
    name:"amar",                    }

console.log(bankAccout.deposit(5000)); // Deposited 5000. New balance is 105000

console.log(bankAccout.withdraw(100000))
console.log(bankAccout.withdraw(10000))

console.log(bankAccout)
