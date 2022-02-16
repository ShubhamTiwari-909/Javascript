let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

try{
    for(let i = 0; i < arr.length; i++){
        let result = arr[i]/nan;
        console.log(result)
    }
    throw "Can't divide by NaN"
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("Finally Block")
}
