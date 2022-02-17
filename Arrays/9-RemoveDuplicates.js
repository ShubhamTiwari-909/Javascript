const array = [10,20,20,20,30,30,40,50,60,60,70,80,80,80,90,100,100]

let removeDuplicates = []
for (let i = 0; i < array.length; i++) {
    if(!removeDuplicates.includes(array[i])) {
        removeDuplicates.push(array[i])
    }
  
}

console.log(removeDuplicates);