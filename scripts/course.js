const courses = [

{
subject:"WDD",
number:130,
credits:3,
completed:true
},

{
subject:"WDD",
number:131,
credits:3,
completed:false
},

{
subject:"WDD",
number:231,
credits:3,
completed:false
},

{
subject:"CSE",
number:111,
credits:3,
completed:false
}

];

const container = document.querySelector("#courseContainer");
const credits = document.querySelector("#credits");

function displayCourses(courseList){

container.innerHTML="";

courseList.forEach(course =>{

const div = document.createElement("div");

div.textContent = `${course.subject} ${course.number}`;

div.classList.add("course");

if(course.completed){

div.classList.add("completed");

}

container.appendChild(div);

});

const totalCredits = courseList.reduce((sum,course)=> sum + course.credits,0);

credits.textContent = `Total Credits: ${totalCredits}`;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () =>{

displayCourses(courses);

});

document.querySelector("#wdd").addEventListener("click", () =>{

const wdd = courses.filter(course => course.subject === "WDD");

displayCourses(wdd);

});

document.querySelector("#cse").addEventListener("click", () =>{

const cse = courses.filter(course => course.subject === "CSE");

displayCourses(cse);

});