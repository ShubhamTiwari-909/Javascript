const array = [10,20,30,40,50,60];

const alternateElement = [];

for (let i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
       alternateElement.push(array[i]);
    }
}

console.log(alternateElement)