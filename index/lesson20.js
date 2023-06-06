// OOPS in JS - ES6  Classes instead of Function

class studentDetails{
   constructor(studentName, studentDOB, studentSection) {
    this.name = studentName;
    this.DOB = studentDOB;
    this.section = studentSection;
    };

    //directly call greet() and getAge() method inside the class
    greet(){
    return `Hello ${this.name}`;
    };

   getAge() {
        const dob = new Date(this.DOB);
        const difference = Math.abs(new Date() - dob)/(1000*60*60*24);
        const diff = difference/365;
        return Math.floor(diff);
    };
};   

const student1 = new studentDetails ("John","1-3-1998","A001");
const student2  =new studentDetails ("Jill","3-4-1997","B001");


console.log(student1);
console.log(student2);

console.log(" ");
console.log("calling greet and getAge Methods using ES6");
console.log(student1.greet());
console.log(student1.getAge());

console.log(student2.greet());
console.log(student2.getAge());
