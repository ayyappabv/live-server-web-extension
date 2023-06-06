// using ES6 spread operator consisting of ....

const class2022 = [
    {
    name: "John",
    age: 23,
    isPresent: true
    },
    
    {name: "Jack",
      age: 22,
      isPresent: false
    }
];

const class2023 = [
    {
    name: "Tiger",
    age: 28,
    isPresent: false
    },
    
    {name: "Disha",
      age: 26,
      isPresent: false
    }
]

const student = [...class2022, ...class2023];

console.log('Print Class 2022');
console.log(class2022);

console.log('Print Class 2023');
console.log(class2023);


console.log("combined 2 Arrays using ES6 spread operator");
console.log(student);
