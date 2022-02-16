// //Mapping logic
const arr = [1,6,9,14,20]
function factorial(number){
    if(number < 1 || number == 1){
        return 1
    }
    return number * factorial(number - 1)
}
function mapping(logic,array){
    const factorialArray = []
    for (let i = 0; i < array.length; i++) {
        factorialArray.push(logic(array[i]))
    }
    console.log(factorialArray)
}

const res = require("express/lib/response");

mapping(factorial,arr)

//function changes property of objects values

const obj = {language: 'javascript' , framework: 'REACT JS', Environment: 'Node JS'}

console.log(obj.framework)//Print REACT JS

function changeValue(obj){
    obj.framework = "ANGULAR JS"
}
changeValue(obj)
console.log(obj.framework) //Print ANGULAR JS

//Anonymous Function with fibonacci series using Recursion
const fibonacci = function (num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
for(let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

//Recursion
function looping(num){
    if(num > 10){
        return
    }
    console.log(num)
    looping(num + 1)
}

looping(0)

// Closures Function Example 1
function closures(num1,num2){
    function cubes(number){
        return number * number * number;
    }
    return cubes(num1) + cubes(num2);// inner functions has access to outer functions
}

console.log(closures(3,5))

//Closures Function Example 2
function outerFunction(x){
    function innerFunction(y){
        return x + y;
    }
    return innerFunction
}

console.log(outerFunction(5)(10)) //5 is for Outside Function parameter and 10 is for Inner Function Parameter

//Rest Parameter
function rest(multiplier,...args){
    return args.map(item => multiplier * item)
}
console.log(rest(3,1,2,3,4,5,))

//Arrow functions

const sort = () => [5, 4, 3, 2, 1].sort(); //Single Line Statement without  Curly Braces
console.log(sort());

//Arrow functions with Curly Braces
const languageChecker = (value) => {
  switch (value) {
    case "HTML":
      console.log("HTML");
      break;
    case "CSS":
      console.log("CSS");
      break;
    case "JS":
      console.log("JS");
      break;

    default:
        console.log("Language not found!!");
      break;
  }
};

languageChecker("JAVA")
