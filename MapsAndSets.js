//MAPS
const maps = new Map();

//set the key value pair using set(key,value) method
maps.set("Language1","Javascript")
maps.set("Language2","Java")
maps.set("Language3","Python")

console.log(maps.get("Language1"))//get the value of Language1 key using get(key) method

console.log(maps.has("Language3"));//checks the key Language1 is present in the map or not

maps.delete("Language1");//delete the value assigned to Language1

maps.clear()//clear the entire map

console.log(maps.size)//gives the length of the map


//SET
const sets = new Set();

//insert the elements using add(value) method
sets.add("HTML")
sets.add("CSS")
sets.add("JAVASCRIPT")

//Iterating over Set elements
for (const i of sets) {
    console.log(i)
}

//check the elements exist in set or not using has() method
console.log(sets.has("CSS"))

//delete elements using delete method(value)
sets.delete("CSS")

console.log(sets)
