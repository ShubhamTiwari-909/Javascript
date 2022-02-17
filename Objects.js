//creating objects
const obj1 = {
    first_name : "Shubham",
    last_name : "Tiwari",
    email : "shubham@gmail.com",
    field : "Web Developer",
    //function inside object
    fullname(){
        return this.first_name + " " + this.last_name
    },
    //array inside object
    skills : ["HTML", "CSS", "JAVASCRIPT","TAILWIND","BOOTSTRAP5","REACT JS","NODE JS"],

    //object inside object
    address : {
        houseno : "2b-2925",
        street : "Kamal colony",
        city : "Saharanpur",
        State : "UP"
    }
}

//accessing objects elements
console.log(obj1["first_name"] + " " + obj1["last_name"]);

//using dot notation
console.log(obj1["email"])

//creating new property
obj1["company"] = "Devronins";

//delete existing property
delete obj1["company"]

// calling function inside objects
console.log(obj1.fullname());

//accessing array inside object
console.log(obj1["skills"]);

//accessing array elements inside object
console.log(obj1["skills"][3]);//print the element at 3rd index

//accesing the inner object
console.log(obj1["address"]["State"]);//print UP


//getter and setters
const obj2 = {
    first_name : "Shubham",
    last_name : "Tiwari",
    fullname : "",
    get getFullname(){
        return this.fullname.toUpperCase();
    },
    set setFullname(value){
        this.fullname = value;
    }
}

obj2.setFullname = "Shubham Tiwari"//setting the value of setter
console.log(obj2.getFullname);//getting the value of getter


//contructors
function Person(first_name,last_name,company){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company = company;
}

const person1 = new Person("Shubham", "Tiwari" , "Devronins");
const person2 = new Person("Mayank", "Thakur" , "Devronins");

console.log(`Person 1 full name is : ${person1.first_name} ${person1.last_name} `)
console.log(`Person 2 full name is : ${person2.first_name} ${person2.last_name} `)

//defining property using defineProperty
Object.defineProperty(obj1, "company",{value : "Devronins"});
console.log(obj1.company);

//object destruturing object
const obj3 = {
    name : "Shubham",
    email : "shubham@gmail",
    company : "Devronins",
    field : "Web Developer"
}
const { name , email , company , field } = obj3;
console.log(name,email,company,field);

//using rest parameter
const obj4 = { lang1 : "JAVASCRIPT" , lang2 : "JAVA" , lang3 : "PYTHON" , lang4 : "KOTLIN" };

const {lang1, ...langs} = obj4;
console.log(lang1)
console.log(langs) //print the remaining elements after lang1


//using "this" for object refence ,The this refers to the object that it is in

const manager = {
    name : "Manager",
    field : "Web Developer",
    experience : "10 years"
}
const intern = {
    name : "Itern",
    field : "Web Developer",
    experience : "0 years"
}

function greeting() {
    return (`Welcome ${this.name}`);
}

manager.greeting = greeting;
intern.greeting = greeting;

console.log(manager.greeting());
console.log(intern.greeting());
