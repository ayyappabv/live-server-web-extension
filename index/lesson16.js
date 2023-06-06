// using ES6 destructive

const class2022 = [
    {
    name: "John",
    age: 23,
    isPresent: true
    },
    
    {name: "Amit",
      age: 22,
      isPresent: false
    }
];

const class2023 = [
    {name: "Tiger",
      age: 28,
      isPresent: true
    },

    {name: "Disha",
    age: 26,
    isPresent: false
  },
];

const totalStudents = [...class2022, ...class2023];

//using Destructive
const [var1, var2, var3, var4] = totalStudents;
console.log('to store onject elesements into different variables');
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
