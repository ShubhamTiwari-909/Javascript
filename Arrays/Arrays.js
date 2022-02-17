const array = [10,20,30,40,50,60]
const array1 = ["HTML","CSS","JAVASCRIPT","BOOTSTRAP","REACT","ANGULAR"]
//iterating over arrays using for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]) 
}

//iterating over arrays using for_in loop
for (const key in array) {
   console.log(array[key])
}

//iterating over arrays using for_of loop
for (const value of array) {
    console.log(value)
}

//iterating over arrays using foreach loop
let a = array.forEach(element => {
    console.log(element)
});

console.log(a);

//using while loop
let i = 0;
while (i < array.length) {
    console.log(array[i])
    i++
}

//Array methods
const concatenation = array.concat(array1);//combines both the arrays

const joining = array1.join("-")//joins the elements with '-' - HTML-CSS-JAVASCRIPT-BOOTSTRAP-REACT-ANGULAR

const pushing = array.push(70,80)//insert the elements at the end of the arrays

const popping = array.pop()//removes the last element from the array

const unshifting = array1.unshift("TAILWIND")//insert element at the starting of the array

const shifting = array1.shift()//removes element from the starting of the array

const slicing = array1.slice(1,4)//returns elements from index 1(including) upto index 4(excluding)

const splicing = array.splice(1,3,"Hello","JAVACRIPT")//2 is the index, 3 is the number of elements to be removed and "Hello" and "JAVACRIPT" are the elements to be inserted there

const reversing = array.reverse()//reverse the array

const sort = array1.sort()//sort the array

const indexof = array1.indexOf("JAVASCRIPT")//returns the index of 'JAVASCRIP'

const lastIndexof = array.lastIndexOf(10)//returns the index of 10 from right side of the array



const numberArray = [1,5,10,15,20,25,35,40];

//map function
const mapping = numberArray.map(item => {
    return item * 99 //maps all the elements multiplied by 99
})

//filter function
const filtering = numberArray.filter(item => {
    return item > 15 //filter the list and return the array with elements greater than 15
})

//reduce function
const reduce = numberArray.reduce((acc, item) => {
    return acc + item;//add all the elements in the array and return a single value as the sum of elements 
},0)

//every function
const every = numberArray.every(item => {
    return item > 15//checks every element in the array is satisfying the condition which is greater than 15 and return true or false based on the result
})

//some function
const some = numberArray.some(item => {
    return item > 15//checks if some elements in the array is satisfying the condition which is greater than 15 and return true or false based on the result
})


