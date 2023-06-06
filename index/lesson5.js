//to define an object within an object
const students = [
    {
         name : "John",
        age:23,
        isAvailable: true,
        address:{
            street: "22nd street",
            pincode: "123456",
            city:'ON'
        },
    },
    
    {
        name : "Harry",
       age:24,
       isAvailable: false,
       address:{
           street: "24th street",
           pincode: "567890",
           city:'TORONTO'
       },
   } 

]


console.log(JSON.stringify(students));



