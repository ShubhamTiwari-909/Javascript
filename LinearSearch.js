const linearSearch = (array,item) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item){
           return array[i];
        }
    }
    return "NOt found"
}

const arr = [1,34,345,2,33,10,99,12,13,14,15,20];

console.log(linearSearch(arr,99));