//CREATING AN OBJECT
let student = {
    fname: "Anna",
    age : 20,
   
};

//Adding
student.address = "westside";
//updating
student.address = "Newyork";
// deleting
// delete student.address;
console.log(student);


//use for in loop to create all keys and values

//keys
for (let a in student) {
    console.log(student[a]);
}
//values
for(let a in student) {
    console.log(a); 
}

//key and value pairs
for(let a in student) {
    console.log(a, student[a]);
}