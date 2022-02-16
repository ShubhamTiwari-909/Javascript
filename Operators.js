//Shift Operators

console.log(10>>1) //Right shift
console.log(25<<3) //left shift

console.log(10 & 8) //AND 
console.log(10 | 1) //OR
console.log(10 ^ 3) //XOR

const number = 20;

//logical AND
if(number > 5 && number <25){
    console.log(number)
}


//logical OR
if(number > 5 || number < 15){
    console.log(number)
}

//Conditional Operators
const checker = 20 >= 10 ? "Number 20 is greater" : "Number 10 is greater"
console.log(checker)

//typeof

console.log(typeof("Javascript"))//string
console.log(typeof(99))//number
console.log(typeof(true))//boolean
console.log(typeof([1,2,3,4,5]))//objects
console.log(typeof(new Date()))//object

//in operator to check the value exist in another object
console.log("PI" in Math);

