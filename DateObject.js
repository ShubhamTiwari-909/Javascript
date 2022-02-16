let today = new Date();

//get methods
const date = today.getDate()//get the today date number 
const month = today.getMonth()//get the current month number 
const year = today.getYear()//get the current year number - 22
const fullYear = today.getFullYear()//get the current year number full format like 2022
const hour = today.getHours()//get the current hour number
const minutes = today.getMinutes()//get the current minute number
const seconds = today.getSeconds()//get the current second number


//set methods
const setdate = today.setDate(20)//get the today date number 
const setmonth = today.setMonth(10)//get the current month number 
const setyear = today.setYear(25)//get the current year number - 22
const setfullYear = today.setFullYear(2025)//get the current year number full format like 2022
const sethour = today.setHours(20)//get the current hour number
const setminutes = today.setMinutes(56)//get the current minute number
const setseconds = today.setSeconds(39)//get the current second number

//comparing dates
let expiry = new Date(2022, 2, 10, 23, 59, 59, 999);
const milliPerDay = 24 * 60 * 60 * 1000;
const daysLeft = Math.floor((expiry.getTime() - today.getTime())/milliPerDay);//dividing by Number of milliseconds because the date is returned in milliseconds



let time24Format = hour + ":" + minutes + ":" + seconds;//24 hours format


let hour12Format = "" + ((hour > 12) ? hour - 12 : hour)
let minutes12Format = "" + (minutes < 10 ? ":0" : ":" + minutes)
let seconds12Format = "" + (seconds < 10 ? ":0" : ":" + seconds)

let time12Format = hour12Format + "" + minutes12Format + "" + seconds12Format + (hour > 12 ? "pm" : "am");//12 hour format
console.log(time12Format);
