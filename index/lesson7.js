//calling a function with a parameter in javascript

const student = [];

const students = (stName, stAge, stIsAvailable, stAddress) => {
    const studentDetails = {
        name : stName,
        age: stAge,
        isAvailable: stIsAvailable,
        address: stAddress
    }

    student.push(studentDetails);
}
students("John",25,true,{street: "abcstreet",pincode:"123456",city:"ON"});
students("Jill",23,false,{street: "xyzstreet",pincode:"999999",city:"TO"});

console.log(JSON.stringify(student));

//to count the total students
console.log('Total # of Students '+student.length);



