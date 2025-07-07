

// let a=["hari","manoj","amar","bharath"]

// // length
// console.log(arr.length)

// // bracket notation
// console.log(arr[0])
// console.log(arr[12])

// // at
// console.log(arr.at(-1))
// console.log(arr.at(1))
// console.log(arr.at(12))

// // concat
// let arr=["abc"]
// console.log(arr.concat(["charan","pavan"]).concat(["cde"]).length)
// console.log(arr)

// copyWithIn


// let a=["hari","manoj","amar","bharath"]
// console.log(a.copyWithin(0,3))
// console.log(a.copyWithin(3,0,1))

// fill

// let a=[1,2,3,4,5]
// console.log(a.fill(0))
// console.log(a)
// console.log(a.fill(1))
// console.log(a.fill(2,3))
// console.log(a.fill(3,1,2))

// let arr= new Array(5).fill(0)
// let arr2=[]
// console.log(arr,arr2)

// let arr=[[1,2],[1,[1,[1,[3,[4,5,6]]]]]]

// // flat
// console.log(arr.flat(Infinity),arr) // depth


// let a=["amar","hari","manoj","amar","hari1"]
// // console.log(a.includes("hari",1))

// console.log(a.indexOf("hari",3))
// console.log(a.indexOf("hari1",2))

// let a=[1,2,3,4]

// console.log(a.join())
// console.log(a.join(""))
// console.log(a.join("-"))

// // console.log(a.reverse())

// // // slice

// console.log(a.slice(1))
// console.log(a.slice(1,3))
// console.log(a.slice(-1))
// console.log(a.slice(1,-1))
// console.log(a)



// a[1]=10
// a[3]=3
// a[4]=4

// for(let i=0;i<a.length-1;i++){
//     if(i===0){
//         a[i]=a[i]
//         continue
//     }
//     if(i===1){
//         a[i]=10
//     }else{
//         a[i+1]=a[i]

//     }

    
// }

// let b=[...a.slice(0,1),10,...a.slice(1)]
// console.log(b)



// console.log(a.splice(2))

// console.log(a)

// console.log(a.splice(1,3))

// a.splice(1)// removes elements from 1st index
// a.splice(1,2)// removes 2 elements from the index
// console.log(a.slice(1,3))
// a.splice(1,2,9,3,5,6) //removes 2 elements from first index and adds all the elements there -- from 3rd argument 9

// let a=[1,2,3,4]
// // a.splice(1,0,9)

// a.splice(1,0,1,2)// from 1st index it doesn't remove any element and adds 1,2





// console.log(a)
// console.log("123")


// let a=[1,2,3,4,5,2,1,1]

// // find --> first match value

// let index;

// let b=a.find((e)=>{
//     return e>2   
// })

// function someFunction(someValue){
//     // let filteredArray=[]

//     for(let i=0;i<a.length;i++){
//         if(a[i]>someValue){
//             return i
//         }
//     }

//     // return filteredArray

// }

// console.log(someFunction(2))

// console.log(someFunction(2))

// console.log(index)

// if condition doesn't match it returns undefined

// let c=a.filter((e)=>e>2)
// console.log(c)

// console.log(a.indexOf({name:"hari",age:23}))


// console.log(a.findLast((e,i)=>{
//     return e>2   
// }))

// console.log(a.findIndex((e)=>true))
// console.log(a.findLastIndex((e)=>{
//     if(e>2){
//         return true

//     }
    
//     }))

// console.log(a.filter((banana)=>banana<10))

// let a=[3,6,9,12]

// some- atleast one element meets the condition
// console.log(a.some((e)=>e>10)) //it returns either true or false
// every - all elements should meet the condition
// console.log(a.every((e)=>e%2===0))

// a.forEach((e,i)=>{
//     console.log(i,e)
// })

// for(let i=0;i<a.length;i++){
//     // console.log(i)
// }

// let b=a.map((e)=>{
//     return e*3
// })
// console.log(b)

// let a=[{name:"iphonea",price:900},{name:"aiphone14",price:650},{name:"iphone16",price:600}]



// let b=a.reduce((acc,curr)=>{

//     // acc+curr
//     // acc-curr
//     return acc+curr.price+100-1000+(2**2)



//     // 0+1=1
//     // 1+2=3
//     //3+3=6
//     //6+4=10

//     // 100-1=99
//     //99-2=97
//     //97 -3=94
//     //94 -4 =90

//     // 1*1=1
//     //1*2=2
//     //2*3=6
//     //6*4=24

//     // 0+500=500
//     //500+550=1050
//     //1050+600=1650

//     //0+500+50=550
//     //550+550+50=1150
//     //1150+600+50=1700

// },0)

// console.log()

// let a=[8,2,1,4,3,6,7]

// [8,2,1,4,3,6,7] [8,1,2,4,3]
let a=["hari","amar"]

console.log(a.sort((a,b)=>a.localeCompare(b)))
// localecompare
// a-b ascending
// b-a descending
// a.localeCompare(b) a-z
// b.localeCompare(a) z-a

// console.log(b)











