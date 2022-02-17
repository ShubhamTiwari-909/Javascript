const array = [10,20,30,40,50,60,70,80,90,100];

let rotateArray = [];
let i = 4;
while(i < array.length) {
    rotateArray.push(array.pop());
}
let result = rotateArray.concat(array);

console.log(result);