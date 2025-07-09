

// DOM --> document object model

// it is representation of our entire page --> tree like structure

/*
-like the whole HTML page = document
-each tag (like <body> ,<h1>,<div>)--> a node in the tree
-js each node can be accessed and manipulated using javascript


blueprint of the page js read/write
*/


// document["title"]="some value"
// console.log(document)

// document.title="dom"
// console.log(document.body)

//  selecting elements

// document.getElementById

// let idElement=document.getElementById("id-1")


// idElement.style.color="red"
// console.log(idElement)

// // document
// let classElements= document.getElementsByClassName("class")
// console.log(classElements);

// let selectByTagName=document.getElementsByTagName("p")
// console.log(selectByTagName)


// let data=[...selectByTagName]
// data.forEach((e)=>{
//     e.style.color="green"
// })

// // document.queryselector

// let pElement=document.querySelector("#id-1")
// let anotherElement=document.querySelector("body .p-class")

// anotherElement.style.color="gray"

// console.log(pElement)

// // documenter.queryselectorAll

// let classElements2=document.querySelectorAll(".class")
// console.log(classElements2);


// classElements2.forEach((e)=>{
//     e.style.color="purple"
// })



// div.textContent="changed content"

// div.innerHTML="<p><b>bold text</b> this is simple para</p><ul><li>list1</li></ul>"

// div.setAttribute("class","some-class lskdfjasd")
// console.log(div.getAttribute("class"))
// console.log(div.getAttribute("class").split(" "))

// if(div.getAttribute("class").split(" ").includes("some-class")){
//     div.style.color="green"
// }

// to add classes-> div.className

// div.className="class-3"

// console.log(div.className)

// console.log(div.getAttribute("class"))
// console.log(div)

// classList

// div.classList.add("class-3")

// div.classList.remove("class-2")
// console.log(div.getAttribute("class"))
// div.classList.toggle("class-1")



// console.log(div.classList.contains("class-3"))

// if(!div.classList.contains("class-3")){
//     div.classList.add("class-2")

// }


// div.innerHTML=`<p style="color:red" title="some title" ><b>bold text</b> this is simple para</p><ul><li>list1</li></ul>`


// styling using js
// let element=document.querySelector("#id-1 p")


// use camelcase for styling
// element.style.fontStyle="italic"

// const button=document.querySelector("button")

// button.style.margin="0 auto"
// button.style.width="200px"
// button.style.display="block"
// button.style.padding="10px 20px"
// button.style.border="2px solid black"
// button.style.borderRadius="10px"
// button.style.cursor="pointer"
// button.style.background="cyan"

// button.addEventListener("mouseover",()=>{
//     button.style.background="purple"
// })

// button.addEventListener("mouseout",()=>{
//     button.style.background="cyan"
// })


// create and remove elements using javascript

let div=document.getElementById("div-id")
console.log(div)

let newPara=document.createElement("li")
newPara.textContent="this is created using javascript"


// div.appendChild(newPara) 
// div.append(newPara)
// div.prepend(newPara)

let removePara=document.getElementById("remove-id")
removePara.remove()

// document.body.appendChild(newPara)

let thirdPara=document.getElementById("third-para")
div.insertBefore(newPara,thirdPara)

let ul=document.querySelector("ul")
let lis=document.querySelectorAll("ul li")
console.log(lis)

ul.insertBefore(newPara,lis[1])

// traversing the dom

// console.log(ul.parentElement)
ul.parentElement.style.background="yellow"
let data=ul.children

// data.forEach((e)=>{
//     e.style.color="blue"
// })


for (let element of data){
    element.style.color="blue"
}

console.log(ul.children)

ul.nextElementSibling.nextElementSibling.previousElementSibling.style.fontStyle="italic"
// ul.previousElementSibling.style.color="red"
ul.previousElementSibling.style.color="red"

console.log(ul.previousElementSibling)


// let counter=1


// let button=document.querySelector("button")
// button.addEventListener("click",function(){
//     console.log("clicked")
//     ul.classList.toggle("class-2")
//     let data=[...ul.children]
    
//     counter++
//     data[0].textContent=`list ${counter}`

//    if(data[0].style.color==="red") {
//     data[0].style.color="blue"}else{
//          data[0].style.color="red"
//     }

//     let data2=document.createElement("p")
//     data2.textContent="some data"
//     document.body.appendChild(data2)
    
// })
// // console.log(counter)

// let fruits=["apple","banana","orange"]

// fruits.forEach((e)=>{
//     let data=document.createElement("p")
//     data.textContent=e

//     document.body.appendChild(data)

// })


















