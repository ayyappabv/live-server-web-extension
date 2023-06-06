//example of filter


const student = [
    {name: "John",
      age: 24,
      isPresent:true
    },

    {name: "Jill",
      age: 22,
      isPresent:false
    },

    {name: "Ram",
      age: 16,
      isPresent:false
    }
   

];


console.log(" ");
console.log('unfiltered list of student object')
console.log(student);


const studentArray = student.filter(function (student){
  return student.isPresent===false;
});


console.log("");
console.log('will print a filtered list of array where isPresent is false')
console.log(studentArray);


//combination of map and filter function together to print student names where isPresent = false
const studentArray1 = student.filter( ( student) => {
  return student.isPresent===false;
}).map( (student) => student.name);

console.log("");
console.log("This is a combination of Filter and Map")
console.log("Print Those Student Names whose IsPresent is False")
console.log(studentArray1);