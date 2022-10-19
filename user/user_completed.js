
let id=""
const dialog= document.getElementById('task');
const taskList = document.querySelector('.collection');
const taskCard = document.querySelector('.feed');
let title,compTaskTitle,compDate,rate,details,hoursWorked;
loadEventListener();

function loadEventListener() {

document.addEventListener('DOMContentLoaded', loadTasksCard);

}
function completedTasks(){
    title = document.querySelector('#completedTaskTitle');
    compTaskTitle = document.getElementById("completedTaskTitle").textContent;
    compDate = document.getElementById("dateCompleted").value;
    rate =  document.getElementById("payRate").textContent;
    hoursWorked = document.getElementById("hoursOfWork").value;

   
   let taskDetails = new Array();
   taskDetails = JSON.parse(localStorage.getItem("CompletedTasks"))?JSON.parse(localStorage.getItem("CompletedTasks")) :[];
   if(taskDetails.some((v) => {return v.compTaskTitle==compTaskTitle}))
   {
       alert("Task is already exists!!")

   }
   else
   {
       taskDetails.push({
           "title":compTaskTitle, 
           "date":compDate,
           "payrate":rate,
           "hours":hoursWorked

       }); 
       localStorage.setItem("CompletedTasks", JSON.stringify(taskDetails));
       // localStorage.setItem(localStorage.length, value);
   }
//    createNewTaskElement(title.value);
//   location.reload(true);
   

} 

 //creating new element for taskCard

  function createTask(compTaskTitle, compDate, rate,hoursWorked) {
   var newTask = document.createElement('ul');
    newTask.innerHTML += `<ul class="card" id="taskDetails">
        <li><h3>${compTaskTitle}</h3></li
       <li> <p>Due: ${compDate}</p></li>
       <li> <p>Rate: ${rate}</p></li>
       <li> <p>Hours: ${hoursWorked}</p></li>
       <li> <p>Cost: ${hoursWorked * rate}</p></li>
       
    </ul>`;
   
    taskCard.appendChild(newTask);
    
}
function loadTasksCard() {
  let tasks;
  if (localStorage.getItem('CompletedTasks') === null) {
    tasks =[];
  } else {
    tasks = JSON.parse(localStorage.getItem('CompletedTasks').toString());
  }

  console.log(tasks);

  tasks.forEach(function (task) {
    if(task.assignedUser==localStorage.getItem("loggedUserEmail")){
      createTask(task.title,task.date,task.payrate,task.hours);
    }
   
  });
}
