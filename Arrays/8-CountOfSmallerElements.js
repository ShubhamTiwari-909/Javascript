const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let count = 0;
let conditions = 40;
for (let i = 0; i < array.length; i++) {
  if (array[i] <= conditions) {
    count++;
  }
}

console.log(count);
