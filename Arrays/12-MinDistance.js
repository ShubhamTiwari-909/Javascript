const array = [10,20,30,40,50,60,50,80,90,50];

const minimum = []
const minDIstance = (array,elem1,elem2) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) { 
            if(array[i] === elem1 && array[j] === elem2) {
                minimum.push(j - i);
            }
        }
      
    }
}

minDIstance(array,30,50)
console.log(minimum[0]);