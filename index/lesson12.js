//example to print objects using forEach method

const student = [
        {name: "Raj",
        age: 57,
        isPresent: true
        },

        {name: "Deepa",
        age: 49,
        isPresent: true
    },

    {name: "Anil Bhai",
    age: 61,
    isPresent: true
    },

    {name: "Jenny",
    age: 58,
    isPresent: false
    }
]

console.log("print member of an object using forEach method");
student.forEach(function (student){
    console.log(student.name);
});