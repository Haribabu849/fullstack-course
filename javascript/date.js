

// Date Object

//  create a date

// const now = new Date()

// console.log(now)

const date1= new Date("2024-12-31")

// console.log(date1)


//  2023- year, 6- index based month , 31- day
const date2=new Date(2023,6,31) // month is zero index based jan-0 feb-1 ---- july -6

// console.log(date2)


let now=new Date()

console.log(now.getFullYear())
console.log(now.getMonth()) // index based
console.log(now.getDate())
console.log(now.getDay()) // index based sunday-0 monday-1 tuesday-2
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())


let months=["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"]
let days=["sun","mon","tues","wed","thu","fri","sat"]

console.log(months[now.getMonth()])
console.log(days[now.getDay()])


let someDate=new Date()
// console.log(someDate)

someDate.setFullYear(2030)
someDate.setMonth(6)
someDate.setHours(22)
someDate.setDate(1)
someDate.setMinutes(30)
someDate.setSeconds(0)


console.log(someDate)

// console.log(someDate<now)

// july- month ,31- date, (, 2012 --> year) 23: hours, 20:minutes:30:seconds
let date3=new Date("july 31, 2012 23:20:30")
// 2012-year, 5- month, 12- date, 22- hours, 20- minutes, 20 - seconds
let date4=new Date(2012,5,12,22,20,20)

console.log(date3)
console.log(date4)

const nextWeek=new Date()
// nextWeek.setDate(nextWeek.getDate()+7)
// nextWeek.setHours(nextWeek.getHours()+2)
// console.log(nextWeek)

console.log(nextWeek.toISOString())
console.log(nextWeek.toString())
console.log(nextWeek.toDateString())
console.log(nextWeek.toTimeString())