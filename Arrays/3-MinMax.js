const array = [10,10,30,40,50,60];

let min = array[0] , max = 0;
for (let i = 0; i < array.length; i++) {
   if(array[i] < min){
       min = array[i];
   } 
   else if(array[i] > max){
       max = array[i];
   }
}

console.log(min, max);

