const array = [10,4,5,6,7,8,7,3,2,1];
let flag = true;
for (let i = 0; i < array.length; i++) {
    flag = false;
    for (let j = i + 1; j < array.length; j++) {
        if(array[j] < array[i]){
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
    if(flag) {
        console.log(array[i]);
    }
}
