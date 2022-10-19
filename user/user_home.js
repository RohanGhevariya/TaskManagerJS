
let id=""
const dialog= document.getElementById('task');
const taskList = document.querySelector('.collection');
const taskCard = document.querySelector('.feed');
let title,Title,date,details,assignTo,payRate;

// Getting Logged User Email
let loggedUserEmail=localStorage.getItem("loggedUserEmail");
console.log(loggedUserEmail);


loadEventListener();
//myFunction();
// taskDetails();
function loadEventListener() {
// document.addEventListener('DOMContentLoaded', loadTasks);
document.addEventListener('DOMContentLoaded', loadTasksCard);
// taskList.addEventListener('click', deleteTask);
email();
}


function addData(){
     title = document.querySelector('#tasktitle');
     Title = document.getElementById("tasktitle").value;
     date = document.getElementById("duedate").value;
     details = document.getElementById("taskdesc").value;
     assignTo = document.getElementById("assignTo").value;
     payRate = document.getElementById("payrate").value;
    
    let taskDetails = new Array();
    taskDetails = JSON.parse(localStorage.getItem("Tasks"))?JSON.parse(localStorage.getItem("Tasks")) :[];
    if(taskDetails.some((v) => {return v.title==Title}))
    {f
        alert("Task is already exists!!")

    }
    else
    {
        taskDetails.push({
            "title":Title, 
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
    newTaskATag.innerHTML = '<i class="material-icons">delete</i>';
  
//     newTask.appendChild(newTaskATag);
  
    taskList.appendChild(newTask);
  }
  function loadTasks() {
    console.log("loading Tasks");
    let tasks;
    if (localStorage.getItem('Tasks') === null) {
      tasks =[];
    } else {
      tasks = JSON.parse(localStorage.getItem('Tasks').toString());
    }

    console.log(tasks);

    tasks.forEach(function (task) {
      if(task.assign==loggedUserEmail){
        createNewTaskElement(task.title);
      }
      
    });
  }
//creating new element for taskCard

  function createTask(Title, date, details,assignTo, payRate) {
   var newTask = document.createElement('ul');
    newTask.innerHTML += `<ul class="card" id="taskDetails">
    <li><h3>${Title}</h3></li
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
    if(task.assign==loggedUserEmail){
      createTask(task.title,task.date,task.details);
    }
   
  });
}

function email(){
  let tasks;
  if (localStorage.getItem('Tasks') === null) {
    tasks =[];
  } else {
    tasks = JSON.parse(localStorage.getItem('Tasks').toString());
  }
  tasks.forEach(function (task) {
    var email = task.assignTo;
    if(email == document.getElementById('loginEmail').value){
    console.log(email);
  }
  });
  
}
