const array = [10, 2, 4, 1, 99, 80, 100, 11, 16, 209];

let secondLargest = 0;
let temp;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
   if(array[j] < array[i]) {
       temp = array[j];
       array[j] = array[i];
       array[i] = temp;
   }
  }
}
secondLargest = array[array.length - 2]
console.log(secondLargest);
