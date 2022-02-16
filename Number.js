const decimal = 99; //decimal number
const float = 99.19191
const octal = 0100; //octal number
const hexa = 0x2FFFFF;
const binary = 0b10101;

const floating = Number.parseFloat(decimal)
const int = Number.parseInt(decimal)

const Exponential = decimal.toExponential()//represent the number in exponential notation
const Precision = float.toPrecision(4)//return 99.19 upto 4 digits

//MATH methods
console.log(Math.PI);//value of PI
console.log(Math.sqrt(decimal));//Square root of number
console.log(Math.cbrt(decimal));//Cube root of number
console.log(Math.round(float));//round the number and remove the decimal point and return the integer
console.log(Math.sin(90));
console.log(Math.cos(70));
console.log(Math.tan(100));
console.log(Math.pow(2,10));//2 raised to the power of 10
console.log(Math.exp(29));//exponential
console.log(Math.log10(100));//log base 10
console.log(Math.log2(100));//log base 2
console.log(Math.floor(2.9));
console.log(Math.ceil(3.1));
console.log(Math.max(11,45,76,99,10,18,101,1190));//returns the maximum value 
console.log(Math.min(11,45,76,99,10,18,101,1190));//returns the minimum value 
console.log(Math.random());//return a random floating number between 0 and 1
console.log(Math.floor(Math.random() * 10));//return a random integer between 0 and 10



