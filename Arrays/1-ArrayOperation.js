const array = [10,20,30,40,50,60,70,80,90,100,101];


//insert element at the end
const insertion1 = array.push(102)
const insertion2 = array.push(103)
const insertion3 = array.push(104)
const insertion4 = array.push(105)

//delete element at the end
const popping1 = array.pop();
const popping2 = array.pop();
const popping3 = array.pop();
const popping4 = array.pop();


//searching arrays - linear searching
const searching = (array,item) => {
for (let i = 0; i < array.length; i++) {
    if(array[i] === item){
        return `${item} found`;
    }
}
}

// binary searching
const binarySearch = (array,item) => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end){
        let mid = Math.floor((start + end) / 2);

        if(array[mid] === item){
            return `${array[mid]} found`;
        }
        else if(array[mid] > item){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    return `element not found`
}
console.log(binarySearch(array, 100));

