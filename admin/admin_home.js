// // var loginemail = document.getElementById("loginEmail").value;
// // var loginpass = document.getElementById("loginPaswd").value;

// // let userDetails = new Array();
// // userDetails = JSON.parse( localStorage.getItem("users"))?JSON.parse( localStorage.getItem("users")) :[];
// // if(userDetails.some(() => {return v.email == loginemail && v.pass == loginpass}))
// // {
// //     alert("logged In");
// //     let currentuser = userDetails.filter(() => {return v.email == loginemail && v.pass == loginpass})[0]
// //     localStorage.setItem('uname',currentuser.name);
// //     localStorage.setItem('loginEmail',currentuser.email);
// // }
// import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// const status = document.getElementById("status");
// const feed = document.getElementById("feed");

// var data = JSON.parse(localStorage.getItem("periodically-data") || "[]");
// document.body.className = localStorage.getItem("periodically-theme") || "";

// updateTasks();
// updateStatus();

// setInterval(updatePastDue, 100);
// document.querySelectorAll("[data-open]").forEach(item => {
//     item.addEventListener("click", () => {
//         let id = item.getAttribute("data-open");
//         document.getElementById(id).showModal();
//         if (id != "task") {
//             document.getElementById(id).querySelector("button[data-close]").focus();
//         }
//         else {
//             setTaskModal();
//         }
//     });
// });

// document.querySelectorAll("[data-close]").forEach(item => {
//     item.addEventListener("click", () => {
//         document.getElementById(item.getAttribute("data-close")).close();
//     });
// });

// document.getElementById("task-submit").addEventListener("click", e => {
//     let modal = document.getElementById("container");
//     let title = modal.querySelector("[data-title]").value;
//     let date = modal.querySelector("[data-date]").value;
//     let details = modal.querySelector("[data-details]").value;
//     let payRate = modal.querySelector("[data-payrate]").value;

//     let timestamp = new Date(date).getTime();
//     if (title?.trim() && date?.trim()) {
//         if (!e.target.getAttribute("data-uuid")) {
//             let uuid = uuidv4();
//             storeTask(uuid, title, timestamp, details, payRate);
//         }
//         else {
//             let uuid = e.target.getAttribute("data-uuid");
//             // Removes old task from data object and localStorage
//             data = data.filter(item => item.uuid != uuid);
//             localStorage.setItem("periodically-data", JSON.stringify(data));
//             storeTask(uuid, title, timestamp, details, payRate);
//         }
//         updateTasks();
//         updateStatus();
//         document.getElementById("task").close();
//     }
//     else {
//         alert("Title and date can't be empty 🤔");
//     }
// });

// function createTask(uuid, title, date, details, payRate) {
//     feed.innerHTML += `<div class="card" id="${uuid}">
//         <h3>${title}</h3>
//         <p>${date}</p>
//         <p>${details}</p>
//         <p>${payRate}</p>
//         <div class="button-cluster">
//             <button data-delete="${uuid}">Completed</button>
//             <button data-edit="${uuid}">Edit</button>
//         </div>
//     </div>`;
//     addButtonEvents();
// }

// function addButtonEvents() {
//     document.querySelectorAll("[data-delete]").forEach(item => {
//         item.addEventListener("click", () => {
//             let uuid = item.getAttribute("data-delete");
//             let task = data.find(item => item.uuid == uuid);
//             if (confirm(`Would you like to mark "${truncateString(task.title, 20)}" as completed? 🥳`)) {
//                 // Remove item from DOM
//                 document.getElementById(uuid).remove();
//                 // Remove item from data object
//                 data = data.filter(item => item.uuid != uuid);
//                 localStorage.setItem("periodically-data", JSON.stringify(data));
//                 updateStatus();
//             }
//         });
//     });
//     document.querySelectorAll("[data-edit]").forEach(item => {
//         item.addEventListener("click", () => {
//             let uuid = item.getAttribute("data-edit");
//             let task = data.find(item => item.uuid == uuid);
//             setTaskModal("Edit task", "Save", uuid, [task.title, timeToISO(task.timestamp), task.details]);
//             document.getElementById("task").showModal();
//             updateStatus();
//         });
//     });
// }

// function setTaskModal(title = "Create new task", action = "Create", uuid = "", fields = ["", endOfToday(), ""]) {
//     let modal = document.getElementById("task");
//     let submit = document.getElementById("task-submit");
//     modal.querySelector("h2").textContent = title;
//     modal.querySelector("[data-title]").value = fields[0];
//     modal.querySelector("[data-date]").value = fields[1];
//     modal.querySelector("[data-details]").value = fields[2];
//     modal.querySelector("[data-payrate]").value = fields[3];
//     submit.textContent = action;
//     submit.setAttribute("data-uuid", uuid);
// }

// function storeTask(uuid, title, timestamp, details, payRate) {
//     let item = {
//         "uuid": uuid,
//         "title": title,
//         "timestamp": timestamp,
//         "details": details,
//         "payrate": payRate
//     };
//     data.push(item);
//     localStorage.setItem("periodically-data", JSON.stringify(data));
// }

// function updateTasks() {
//     feed.innerHTML = "";
//     data.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0));
//     for (let i = 0; i < data.length; i++) {
//         createTask(data[i].uuid, data[i].title, timeToString(data[i].timestamp), data[i].details);
//     }
// }

// function updateStatus() {
//     let amount = data.length;
//     if (amount == 1) {
//         status.textContent = `${amount} thing left to do`;
//     }
//     else {
//         status.textContent = `${amount} things left to do`;
//     }
// }

// function updatePastDue() {
//     let current = Date.now();
//     for (let i = 0; i < data.length; i++) {
//         if (current > data[i].timestamp) {
//             document.getElementById(data[i].uuid).querySelector("p").className = "warning";
//         }
//     }
// }
// // Converts unix timestamp into string
// function timeToString(timestamp) {
//     let date = new Date(timestamp);
//     if (timestamp) {
//         let month = date.getMonth() + 1;
//         let day = date.getDate();
//         let year = date.getFullYear();
//         let hours = date.getHours();
//         let minutes = date.getMinutes().toString().padStart(2, "0");
//         let period;
//         if (hours > 12) {
//             hours %= 12;
//             period = "PM";
//         }
//         else {
//             period = "AM";
//         }
//         return `${month}/${day}/${year} ${hours}:${minutes} ${period}`;
//     }
//     else {
//         return "Timestamp unknown";
//     }
// }

// // Converts date into ISO format for use in datetime-local input
// function timeToISO(timestamp) {
//     let date = new Date(timestamp);
//     let year = date.getFullYear();
//     let month = (date.getMonth() + 1).toString().padStart(2, "0");
//     let day = date.getDate().toString().padStart(2, "0");
//     let hours = date.getHours();
//     let minutes = date.getMinutes().toString().padStart(2, "0");
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
// }

// // Returns 11:59 PM in ISO format
// function endOfToday() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = (date.getMonth() + 1).toString().padStart(2, "0");
//     let day = date.getDate().toString().padStart(2, "0");
//     return `${year}-${month}-${day}T23:59`;
// }

// function truncateString(string, length) {
//     if (string.length > length) {
//         return string.substring(0, length) + "...";
//     }
//     else {
//         return string
//     }
// }
let id=""
const dialog= document.getElementById('task');
const feed = document.getElementById("feed");

    let title = document.getElementById("tasktitle").value;
    let date = document.getElementById("duedate").value;
    let details = document.getElementById("taskdesc").value;
    let payRate = document.getElementById("payrate").value;
myFunction();
taskDetails();
function addData(){
    
    let taskDetails = new Array();
    taskDetails = JSON.parse( localStorage.getItem("task"))?JSON.parse( localStorage.getItem("task")) :[];
    if(taskDetails.some((v) => {return v.title==title}))
    {
        alert("Task is already exists!!")

    }
    else
    {
        taskDetails.push({
            "title":title, 
            "date":date,
            "details":details,
            "payrate":payRate

        }); 
        localStorage.setItem("task", JSON.stringify(taskDetails))
        localStorage.setItem(localStorage.length, value);
    }
  
}
 
function myFunction(){
    console.log("getting data from local storage");

    var newArr = JSON.parse(window.localStorage.getItem('task'));
    
    for (var i = 0; i < newArr.length; i++) {
      var savedPerson = newArr[i];
      console.log(savedPerson);
      console.log(savedPerson.title)
      
      document.getElementById("item1").innerHTML = savedPerson.title;
      document.getElementById("item2").innerHTML = savedPerson.title;
    }
}
 
function taskDetails(){
    var newArr = JSON.parse(window.localStorage.getItem('task'));
    
    for (var i = 0; i < newArr.length; i++) {
      var savedPerson = newArr[i];
      console.log(savedPerson);
      console.log(savedPerson.title);
      console.log(savedPerson.details);
      console.log(savedPerson.date);
      console.log(savedPerson.payRate);

      document.getElementById("taskname").innerHTML = savedPerson.title;
      document.getElementById("taskdetails").innerHTML = savedPerson.details;
      document.getElementById("time").innerHTML = savedPerson.date;
      document.getElementById("rate").innerHTML = savedPerson.payRate;
}
}
  
