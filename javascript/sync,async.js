// console.log("start")
// setTimeout(()=>{
//     console.log("hello after 2 second")
// },2000)

// setTimeout(()=>{
//     console.log("after 3 seconds")
// },3000)

// let=count=1
// setInterval(()=>{
//     count++
//     console.log("print every 2 seconds"+count)
// },4000)

// let someTimeout=setTimeout(()=>{
//     console.log("something")
// },2000)

// let someInterval=setInterval(()=>{
//     console.log("clear interval")
// },1000)
// clearTimeout(someTimeout)

// setTimeout(()=>{
//     clearInterval(someInterval)
// },1000*10)
// clearInterval(someInterval)

// synchronous and asynchronous

// synchronus --> code runs line by line
// each line waits for previous one to finish
// block

// console.log("start")
// // for(let i=0;i<10000;i++){
// //     console.log("log")
// // }
// setTimeout(()=>{
//     console.log("from settimeout")
// },0)
// setTimeout(()=>{
//     console.log("from set timeout ")
// },2000)
// setTimeout(()=>{
//     console.log("from set timeout ")
// },2000)
// setTimeout(()=>{
//     console.log("from set timeout ")
// },2000)
// setTimeout(()=>{
//     console.log("from set timeout ")
// },2000)

// console.log("something")
// for(let i=0;i<100;i++){
//     console.log("log")
// }

// asynchronous code that can start and finish later(non -blocking)

// setTimeout(() => {
//   console.log("step 1");
//   setTimeout(() => {
//     console.log("step 2");
//     setTimeout(() => {
//       console.log("step 3");
//       setTimeout(() => {
//         console.log("step 4");
//         setTimeout(() => {
//           console.log("step 5");
//           setTimeout(() => {
//             console.log("step 6");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 0);

const basicPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  let success = true;

  if (success) {
    resolve("this is resolved");
  } else {
    reject("this is rejected");
  }
  //   }, 1000);
});

basicPromise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("log");
  });

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 1");
      resolve("1");
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 2");
      resolve([1, 2, 3, 5]);
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 3");
      resolve("3");
    }, 1000);
  });
}

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => {
//     console.log("all steps are completed");
//   })
//   .catch((err) => {
//     console.log("there is an error in  step" + err);
//   });

// const asynchronous = async (params) => {
//   try {
//     let data = await step1();
//     console.log(data);
//     let data2 = await step2();
//     if (true) {
//       throw new Error("error message");
//     }

//     console.log(data2);
//     await step3();
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("log");
//   }
// };

// asynchronous();

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.addEventListener("load", () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     let data = xhr.responseText;
//     console.log(JSON.stringify(JSON.parse(data)));
//   } else {
//     console.log("error has occured");
//   }
// });

// // xhr.body({

// // })

// xhr.send();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data2) => {
//     console.log(data2);
//   });

async function fetchData(params) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    // fetch("https://jsonplaceholder.typicode.com/users/3", {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: 1,
    //     userName: "v manoj",
    //   }),
    // });

    if (!response.ok) {
      throw new Error("error has occured while fetching");
    }
    const data1 = await response.json();
    console.log(data1);
    data1.forEach((e) => {
      let list = document.createElement("li");
      list.textContent = e.name + " " + e.id;
      let span = document.createElement("span");
      span.style.color = "red";
      span.textContent =
        " company name is " + " " + e.company.name.toUpperCase();
      list.appendChild(span);
      //   if (e.company.name === "Romaguera-Crona") {
      document.body.appendChild(list);
      //   }
    });
  } catch (error) {
    console.log(error.message, "from error ");
  }
}
fetchData();

// sets , oops
