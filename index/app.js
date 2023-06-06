//getting DOM Element by Id
console.log("fetching DOM Element by Id")
console.log(document.getElementById("name"));

//getting DOM Elements by TagName
console.log(" ");
console.log("fetching DOM Elements by TagName");
console.log(document.getElementsByTagName("input"));

//getting DOM Elements by ClassName
console.log("");
console.log("fetching DOM Elements by ClassName");
console.log(document.getElementsByClassName("form-element"));

//putting a default value in the name field
//document.getElementById("name").value="Vishwanath"; 


//getting DOM via querySelector and QuerySelectorAll
// querySelector will fetch the first value , querySelectorAll will fetch all the values
// to fetch using querySelector with ID i.e. name

console.log("");
console.log("use DOM to fetch ID i.e. name field using querySelector");
console.log(document.querySelector("#name"));

// to fetch using querySelector with Class i.e. form-element
// note this will fetch only the first element with querySelector
console.log("");
console.log("use DOM to fetch the first element using Class with querySelector");
console.log(document.querySelector(".form-element"));

//to fetch all the elements of a Class using querySelectorAll
console.log(" ");
console.log("to fetch all elements of a Class with querySelectorAll");
console.log(document.querySelectorAll(".form-element"));


//to fetch an particular element of a Class using querySelector All
console.log(" ");
console.log("to fetch an particular element of a Class using querySelector All");
console.log(document.querySelectorAll(".form-element")[0]);

//to fetch all elements using TagName using querySelectorAll
console.log(" ");
console.log("to fetch all elements using TagName using querySelectorAll");
console.log(document.querySelectorAll("input"));

//to change the color and innerText of an element
//console.log("");
//console.log("to change the color and innerText of an element")
//const btn1 = document.querySelector("button");
//btn1.innerText = "Add New Value";
//btn1.style.background = "grey";

//to remove a class
//const container= document.querySelector(".container");
//container.classList.remove("container");

//Method to fire addStudent event
//const addStudent = (evt) => {
//    evt.preventDefault();
//    console.log(evt);
//    const button = evt.target;
//    button.innerText = "Submitted";
//}

//alternate method using addEventListener. Dont create the event in HTML
const btn=document.querySelector("button");

btn.addEventListener("click", (evt) => {
    console.log("");
    console.log("calling addEventListener Method");
    evt.preventDefault();
    const btn = evt.target;
    btn.innerText = "Clicked";
});

//to fetch values from input fields and print the same on button click
const btn1 = document.querySelector("button");
btn1.addEventListener("click", (evt) => {
    evt.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const cls = document.querySelector("#class").value; 

    const stuList = document.querySelector(".student-list");

    //use + button to store and print all the input values
    stuList.innerHTML += `
        <div class = "student-list-item">
            <div class="student-name">  ${name} </div>
            <div class ="student-detail"> 
                <div> Age: ${age} </div>     
                <div> Class: ${cls} </div>
             </div>
      </div>      
    `;

    //below querySelectorAll will clear the input values after buttn click
    document.querySelectorAll("input").forEach(element =>{
        element.value = "";
    });
});
