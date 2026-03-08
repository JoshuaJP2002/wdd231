const courses = [

{code:"WDD130", subject:"WDD", credits:2, completed:true},
{code:"WDD131", subject:"WDD", credits:2, completed:true},
{code:"WDD231", subject:"WDD", credits:2, completed:false},
{code:"CSE110", subject:"CSE", credits:2, completed:true}

];

const container = document.querySelector("#courseContainer");
const credits = document.querySelector("#credits");

function displayCourses(list){

container.innerHTML = "";

list.forEach(course => {

const div = document.createElement("div");
div.textContent = course.code;
div.classList.add("course");

if(course.completed){
div.classList.add("completed");
}

container.appendChild(div);

});

const total = list.reduce((sum, course)=> sum + course.credits,0);
credits.textContent = "Total credits: " + total;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", ()=> displayCourses(courses));

document.querySelector("#wdd").addEventListener("click", ()=> {
displayCourses(courses.filter(c => c.subject === "WDD"));
});

document.querySelector("#cse").addEventListener("click", ()=> {
displayCourses(courses.filter(c => c.subject === "CSE"));
});