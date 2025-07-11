// loops - for loop while loop

// let firstName="hari"
// console.log(firstName)
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName)

// for loop is used to repeat a block of code specific number of times
// 1st - variable declare, condition , increment or decrement

// for(let i=1;i<=5;i++){
//     console.log(firstName)
// }

// i=1 -> hari
// i=2 -> hari
// i=3 -> hari
// i=4 -> hari
// i=5 -> hari


// looping forwards
// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// looping backwards
// for (let i=5;i>=1;i--){
//     console.log(i)
// }

// for (let i=2;i<=10;i=i+2){
//     console.log(i)
// }

// 2

// 4 6 8 10 12

// squares

// for(let i=1;i<=5;i++){
//     let square=i*i
//     console.log(`square of ${i} is ${square}`)
// }

// let arr=["red","green","blue","yellow"]

// // 4

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// } 

// // "red"
// // "green"
// // "blue"
// // "yellow"

// for(let i=arr.length-1; i>=0;i--){
//     console.log(arr[i])
// }

// break
// let arr=["red","green","blue",2,3,"yellow","jasdlfkj","asdkjfksdf",5,true,false,undefined,["asdfsadf"]]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==="blue"){
//         break;
//     }
//     console.log("still checking for",arr[i])    
// }

// continue


// for(let i=0;i<arr.length;i++){
//     // if(arr[i]==="blue" || arr[i]==="yellow"){
//     //     continue
//     // }

//     // ("string" !== "number")

//     if((typeof arr[i]) === "string"){
//         continue
//     }

    
//     console.log(arr[i])    
// }

// // nested loop

// let arr2=[["hari",24,"tirupati"],["amar",23],["pavan",24]]

// for(let row=1;row<=3;row++){
//     console.log("Row",row)

//     for(let col=1;col<=3;col++){
//         console.log("Column",col)
//     }

//     // console.log("column 1")
//     // console.log("column 2")
//     // console.log("column 3")
// }

// Row 1  column 1 column 2
// Row 2 column 1 column 2
// Row 3 column 1 column 2 

// for(let i=0;i<arr2.length;i++){
//     console.log("array at index ",i)

//     // (j< ["hari",24,"tirupati"].length)
//     // for(let j=0;j<arr2[i].length;j++){
//     //     console.log(arr2[i][j])
//     // }

//     console.log(arr2[i][0])
//     console.log(arr2[i][1])

// }

// while loop when you dont know in advance  how many times you will loop, while the condition is true

// let i=0;

// while(i<0){
//      i++
  
//     if(i===2){      
//         continue        
//     }
// console.log(i);    
// }

// console.log(1,2,3,4,5)

// do{123123
//     console.log(i)
//     i++
// }while(i<0)123
// 123
// let password;
// do{
//     password=prompt("Enter your password, must be atleast 6 letters of characters")
// } while(password.length<6)

    // while(password.length<6){
        
    // password=prompt("Enter your password, must be atleast 6 letters of characters")

    // }

    // for(let i=0;i<6 ;i++){
    //     password=prompt("Enter your password, must be atleast 6 letters of characters")

    // }

