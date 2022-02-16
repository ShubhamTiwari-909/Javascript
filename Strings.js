const str = "Hello Javascript";
const str2 = "Hello React Js";


const charat = str.charAt(7)//returns the character at the specified index
const charCodeat = str.charCodeAt(7)//returns the character code at the specified index

const indexof = str.indexOf('J')//returns the index of 'J'
const lastindexof = str.lastIndexOf('a') // return the index of 'a' starting from the end of the Array

const startwith = str.startsWith("H")//return true because the string starts with 'H'
const endwith = str.endsWith("s")//return false because the string ends with 't' not with 's'
const include = str.includes("Java")//return true because the string contain 'Java' in  'Javascript'

const concatenation = str.concat(str2)//combines both the strings str and str2

const spliting = str.split(" ") // will split the string on the basis on blank space (1 space) - ["Hello","Javascript"]

const slicing1 = str.slice(6)//will print the string after index 6 - "Javascript"
const slicing2 = str.slice(6,10)//will print the string after index 6 upto index 10 including index 10 - "Java"
const negativeSlicing = str.slice(-6)//will print the string starting from last containing last 6 index - "script"

const substrings = str.substring(1,6)//print the string from index 1 and ending at index 6 (index 6 is excluded)

const replacement = str.replace("Javascript","Python")//replace Javascript with Python

const lowerAndupper = str.toLowerCase() + " " + str.toUpperCase();//conversion to lowercase and UPPERCASE\

const repeatation = str.repeat(3)//repeat the string 3 times

//template literals
const language = "Javascript"
const backticks = `Hello ${language}`//new feature in ES6 where you can concate variable values to string using ${variable} syntax

const anotherExample = `The sum of 29 and 31 is ${29 + 31}`//The sum of 29 and 31 is 60
console.log(anotherExample); 