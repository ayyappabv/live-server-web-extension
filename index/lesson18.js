// JSON objects and functions

// JSON is similar to Javascript except that the members are declared within ""
//example of JSON object
   
const jsonStudent = '{"age":23, "name":"John"}';
console.log(typeof jsonStudent);
const stuJson = JSON.parse(jsonStudent);
console.log(typeof stuJson);
console.log(stuJson);
