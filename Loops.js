let arr = ["HTML","cSS","JAVASCRIPT","BOOTSTRAP","TAILWIND","REACT","MONGO DB","NODE JS","EXPRESS JS"];

const NewArr = []
//for loop
for (let i = 0; i < arr.length; i++) {
    NewArr.push(arr[i]);
}
console.log(NewArr)


// for in loop

for(let i in arr) {
    console.log(i) //Print the index number of array elements
}
//for of loop

for(let i of arr) {
    console.log(i); //Print the elements of the Array
}

//for each loop

arr.forEach(element => {
    console.log(element) // It also prints the elements of Array
});

//while loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

do{
    
    console.log(arr[i]);
    i++

}while(i<arr.length);


//break statement
const breakArr = []
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "JAVASCRIPT"){
        break;
    }
    breakArr.push(arr[i])
}

console.log(breakArr) // "Print HTML and CSS"

//continue statement
const continueArr = []
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "JAVASCRIPT"){
        continue;
    }
    continueArr.push(arr[i])
}

console.log(continueArr) //Print all the elements except 'JAVACRIPT'
