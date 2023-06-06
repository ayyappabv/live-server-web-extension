//to print object keys and values
const student = {
    name : "John",
    age : 23,
    fees : undefined,
    wasAbsentOn : [2, 5, 7, 12],
}

console.log("  ");
console.log("will delete fees property from the student object");
delete student.fees;
console.log(student);

console.log("");
console.log("to concatenate string and array object");
console.log(student.name + " was absent on these days " + (student.wasAbsentOn));


