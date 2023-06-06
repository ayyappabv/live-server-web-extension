// OOPS in JS - Function Constructor

function studentDetails(studentName, studentDOB, studentSection) {
    this.name = studentName;
    this.DOB = studentDOB;
    this.section = studentSection;
};

const student1 = new studentDetails ("John","1-3-1998","A001");
const student2  =new studentDetails ("Jill","3-4-1997","B001");


//use protoype to call a function within a function
studentDetails.prototype.greet = function (){
    return `Hello ${this.name}`;
};

studentDetails.prototype.getAge = function () {
    const dob = new Date(this.DOB);
    const difference = Math.abs(new Date() - dob)/(1000*60*60*24);
    const diff = difference/365;
    return Math.floor(diff);
};

console.log(student1);
console.log(student2);

console.log(" ");
console.log("calling greet() and getAge() functions using ES5 prototype");
console.log(student1.greet());
console.log(student1.getAge());

console.log(student2.greet());
console.log(student2.getAge());
