

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

// let div=document.getElementById("div-id")
// console.log(div)

// let newPara=document.createElement("li")
// newPara.textContent="this is created using javascript"


// // div.appendChild(newPara) 
// // div.append(newPara)
// // div.prepend(newPara)

// let removePara=document.getElementById("remove-id")
// removePara.remove()

// // document.body.appendChild(newPara)

// let thirdPara=document.getElementById("third-para")
// div.insertBefore(newPara,thirdPara)

// let ul=document.querySelector("ul")
// let lis=document.querySelectorAll("ul li")
// console.log(lis)

// ul.insertBefore(newPara,lis[1])

// // traversing the dom

// // console.log(ul.parentElement)
// ul.parentElement.style.background="yellow"
// let data=ul.children

// // data.forEach((e)=>{
// //     e.style.color="blue"
// // })


// for (let element of data){
//     element.style.color="blue"
// }

// console.log(ul.children)

// ul.nextElementSibling.nextElementSibling.previousElementSibling.style.fontStyle="italic"
// // ul.previousElementSibling.style.color="red"
// ul.previousElementSibling.style.color="red"

// console.log(ul.previousElementSibling)


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


// events  -- signal that something has happened(click,keypress,load)


// element.addEventListener("click",callbackfunction)



// const btn=document.querySelector("button")


// let counter=1
// btn.addEventListener("click",(e)=>{
//     // console.log(e.target)
    
//     console.log("button is clicked" + counter)
//     counter++

// })


// // keydown,keyup,keypress
// document.addEventListener("keyup",(e)=>{
//     // console.log(e.target)
//     // console.log(e.key)
//     if(e.key==="Escape"){
//         btn.style.color="blue"
//     }else if(e.key==="a"){
//         btn.style.color="red"
//     }
// })


// let input=document.querySelector("input")


// input.addEventListener("input",(e)=>{
//     console.log(e.target.value)
// })
// // console.log(input.value)

// // input.value="something"
// // console.log(input.value)


// // input.addEventListener("input",(e)=>{
// //     console.log(e.target.value)
// // })

// // mouseover,mouseenter
// btn.addEventListener("mouseenter",()=>{
//     btn.style.backgroundColor="green"
// })

// // mouseout,mouseleave
// btn.addEventListener("mouseleave",()=>{
//     btn.style.background="transparent"
// })


// btn.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })

// btn.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })

// btn.addEventListener("dblclick",()=>{
//     console.log("double click")
// })

// let form=document.querySelector("form")

// let usernameInput=document.querySelector(".username")
// let passwordInput=document.querySelector(".password")


// let showButton=document.querySelector(".show")
// showButton.addEventListener("click",()=>{

//     if(passwordInput.getAttribute("type")==="text"){
//          passwordInput.setAttribute("type","password")
//          showButton.textContent="show"

        
//     }else if(passwordInput.getAttribute("type")==="password"){
//         passwordInput.setAttribute("type","text")
//         showButton.textContent="don't show"
//     }
   
// })

// let select=document.querySelector("select")

// select.addEventListener("change",(e)=>{
//     console.log(e.target.value)
//     console.log("change event fired")
// })




// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(usernameInput.value,passwordInput.value,select.value)
// })

let form=document.querySelector("form")
// const emailField=document.querySelector(".email")
// const passwordField=document.querySelector(".password")
// // basic validation
// const invalid=document.querySelector(".invalidEmail")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const email=emailField.value.trim()
//     const password=passwordField.value

//     if(!email.includes("@") || !email.includes(".")){
//         // alert("Invalid email address")
//         invalid.textContent="invalid email address"
//         return
//     }
//     invalid.textContent=""
//     if(password.length<6){
//         // alert("password must be atlease 6 characters")
//         return
//     }
//     console.log(email,password)

//     // console.log(emailField.value)
//     // alert("form is submitted")
//     emailField.value=""
//     passwordField.value=""
// })



let sometasks=[{task:"go for a walk", completed:true},{task:"build a website",completed:false},{task:"build another website",completed:false}]


let taskInput=document.querySelector(".text")


sometasks.forEach((e)=>{
    let task=document.createElement("li")
    task.textContent=e.task

      const delBtn=document.createElement("button")
    delBtn.textContent="delete"
        const editBtn=document.createElement("button")
    editBtn.textContent="edit"
    editBtn.classList.add("edit-class")
    // delBtn.appendChild(editBtn)

    delBtn.addEventListener("click",()=>task.remove())
    editBtn.addEventListener("click",()=>{
        task.remove()
        taskInput.value=e.task
        submitBtn.value="edit"
        let childElements=[...div.children]
        childElements.forEach((e)=>{
            // e[0].setAttribute("disabled","")
            console.log(e)
            let children=[...e.children]
            children[0].setAttribute("disabled","")
            console.log(children)
            // console.log(firstButton)
            // firstButton.setAttribute("disabled","")
        })
        
    })
        task.appendChild(editBtn)

    task.appendChild(delBtn)
        let div=document.querySelector("div")

    if(!e.completed){
        div.appendChild(task)
    }
})

let submitBtn=document.querySelector(".some-class")
submitBtn.value="add"







submitBtn.addEventListener("click",()=>{
    if(submitBtn.value==="edit"){
        submitBtn.value="add"

    }
        document.querySelectorAll(".edit-class").forEach((e)=>{
        console.log(e)
        e.removeAttribute("disabled")
    })
    
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const task=taskInput.value.trim()
    // if(task)

    if(task==="") return
    let div=document.querySelector("div")

    const newTodo=document.createElement("li")
    newTodo.textContent=task

    const delBtn=document.createElement("button")
    delBtn.textContent="delete"
        const editBtn=document.createElement("button")
    editBtn.textContent="edit"
    editBtn.classList.add("edit-class")
    // delBtn.appendChild(editBtn)

    delBtn.addEventListener("click",()=>newTodo.remove())
    editBtn.addEventListener("click",()=>{
        newTodo.remove()
        taskInput.value=task
        submitBtn.value="edit"
        let childElements=[...div.children]
        childElements.forEach((e)=>{
            // e[0].setAttribute("disabled","")
            console.log(e)
            let children=[...e.children]
            children[0].setAttribute("disabled","")
            console.log(children)
            // console.log(firstButton)
            // firstButton.setAttribute("disabled","")
        })
        return
    })


    

    div.append(newTodo)
    console.log(div)
    newTodo.appendChild(editBtn)

    newTodo.appendChild(delBtn)


    taskInput.value=""

})
















