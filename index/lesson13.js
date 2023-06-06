//example of maps


const student = [
    {name: "John",
      age: 24
    },

    {name: "Jill",
      age: 22
    },

    {name: "Ram",
      age: 16
    },
   

];

console.log('Details of Student Object ' + JSON.stringify(student));

console.log(" ");
console.log("using map function and print only name of the student object");
const studentArray = student.map(function (student){
    return student.name;
});

console.log(studentArray);