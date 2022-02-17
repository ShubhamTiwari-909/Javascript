const array = [10,20,30,40,50,60,70,80,90,100,110,120];

let reverse = []

for (let i = array.length - 1; i >= 0; i--) {  
    reverse.push(array[i])
}
console.log(reverse);