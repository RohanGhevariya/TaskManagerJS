
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
 
// function myFunction(){
//     console.log("getting data from local storage");

//     var newArr = JSON.parse(window.localStorage.getItem('task'));
    
//     for (var i = 0; i < newArr.length; i++) {
//     //   var savedPerson = newArr[i];
//     //   console.log(savedPerson);
//     //   console.log(savedPerson.title);
//       document.getElementById("item1").innerHTML = newArr[i].title;
//       console.log(newArr[i].title);
      
//     }
// }
 
// function taskDetails(){
    // var newArr = JSON.parse(window.localStorage.getItem('tasks'));
    
    // for (var i = 0; i < newArr.length; i++) {
    //   var savedPerson = newArr[i];
    //   document.getElementById("taskname").innerHTML = savedPerson.title;
    //   document.getElementById("taskdetails").innerHTML = savedPerson.details;
    //   document.getElementById("time").innerHTML = savedPerson.date;
    //   document.getElementById("assName").innerHTML = savedPerson.assign;

// }
// }

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
  
    newTask.appendChild(newTaskATag);
  
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
function removeTaskFromLocalStorage(taskToDelete) {
  let tasks;
  tasks = JSON.parse(localStorage.getItem('Tasks'));
  tasks.forEach(function (task) {
    if (task === taskToDelete) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem('Tasks', JSON.stringify(tasks));
}