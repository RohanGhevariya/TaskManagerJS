let id=""
const dialog= document.getElementById('task');
const taskList = document.querySelector('.collection');
const taskCard = document.querySelector('.feed');
let title,Title,date,details,assignTo,payRate;
loadEventListener();
//myFunction();
// taskDetails();
function loadEventListener() {
document.addEventListener('DOMContentLoaded', loadTasks);
document.addEventListener('DOMContentLoaded', loadTasksCard);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', updateTasks);
}
function addData(){
     title = document.querySelector('#tasktitle');
     Title = document.getElementById("tasktitle").value;
     sdate = document.getElementById("startdate").value;
     date = document.getElementById("duedate").value;
     details = document.getElementById("taskdesc").value;
     assignTo = document.getElementById("assignTo").value;
     payRate = document.getElementById("payrate").value;
    
    let taskDetails = new Array();
    taskDetails = JSON.parse(localStorage.getItem("Tasks"))?JSON.parse(localStorage.getItem("Tasks")) :[];
    if(taskDetails.some((v) => {return v.title==Title}))
    {
        alert("Task is already exists!!")

    }
    else
    {
        taskDetails.push({
            "title":Title,
            "sdate":sdate, 
            "date":date,
            "details":details,
            "assign":assignTo,
            "payrate":payRate

        }); 
        localStorage.setItem("Tasks", JSON.stringify(taskDetails));
        // localStorage.setItem(localStorage.length, value);
    }
    createNewTaskElement(title.value);
   location.reload(true);
    

} 
 


// creating new element

function createNewTaskElement(task) {
    const newTask = document.createElement('li');
    newTask.className = 'collection-item';
    newTask.appendChild(document.createTextNode(task));
    const newTaskATag = document.createElement('a');
    newTaskATag.style.cursor = 'pointer';
    newTaskATag.style.color = '#e01a4f';
    newTaskATag.className = 'delete-item secondary-content';
    newTaskATag.innerHTML = '<i class="fa fa-remove"></i>';
    // const updateTask = document.createElement('a');
    // updateTask.style.cursor = 'pointer';
    // updateTask.className = 'update-item secondary-content';
    // updateTask.innerHTML = '<i class="fa fa-pencil" href="#divone"></i>';

    newTask.appendChild(newTaskATag);
    //newTask.appendChild(updateTask);
    taskList.appendChild(newTask);
  }
  function loadTasks() {
    let tasks;
    if (localStorage.getItem('Tasks') === null) {
      tasks =[];
    } else {
      tasks = JSON.parse(localStorage.getItem('Tasks').toString());
    }
    tasks.forEach(function (task) {
      createNewTaskElement(task.title);
    });
  }
//creating new element for taskCard

  function createTask(Title, date, details,assignTo, payRate) {
   var newTask = document.createElement('ul');
    newTask.innerHTML += `<ul class="card" id="taskDetails">
        <li><h3>${Title}</h3></li>
       <li> <p>Due: ${date}</p></li>
       <li> <p>${details}</p></li>
     
    </ul>`;
   
    taskCard.appendChild(newTask);
    
}
function loadTasksCard() {
  let tasks;
  if (localStorage.getItem('Tasks') === null) {
    tasks =[];
  } else {
    tasks = JSON.parse(localStorage.getItem('Tasks').toString());
  }
  tasks.forEach(function (task) {
    createTask(task.title,task.date,task.details);
  });
}
// Deletes a single task from the task list
function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(
        e.target.parentElement.parentElement.firstChild.textContent
      );
    }
  }
}
// Delete task from local storage
function removeTaskFromLocalStorage(index) {
	const existingEntries = JSON.parse(localStorage.getItem("Tasks"));
	existingEntries.splice(index, 1);
	localStorage.setItem("Tasks", JSON.stringify(existingEntries));
}
//update Task

function updateTasks(e) {
    if (e.target.parentElement.classList.contains('update-item')) {
        if (confirm('Are you sure?')) {
            console.log('update clicked');
      }
}
}
