//example to print objects within a loop

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

console.log('will print the whole contents of student object');
for(let x of student){
    console.log(x);
}

console.log(" ");
console.log("to print specific members of an object");

for(let x of student){
    console.log(x.name);
}