// using ES6 destructive
//combining two different objects 

const object1 = {
    name: "Amit",
      age: 22
    };

const object2 = {
    isPresent: false
};


// Please use {} instead of [] while combining objects
const combinedObjects = { ...object1, ...object2};

//using Destructive
console.log('After combinging object1 and object2');
console.log(combinedObjects);

//to override an object value 
const combinedObjects1 = { ...object1, ...object2, isPresent:true};
console.log('');
console.log('after overwriting isPresent via destructive method');
console.log(combinedObjects1);


//to store object values in variables
const {name, isPresent} = combinedObjects1;
console.log(" ");
console.log("after storing in separate variables , this will exclude age and only print name and isPresent");
console.log(name);
console.log(isPresent);