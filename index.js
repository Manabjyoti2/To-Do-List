const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask () {
    if(input.value === ""){
        alert("Please enter your task")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveTask();
}

listContainer.addEventListener("click", ((e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveTask();
   }
}))

function saveTask(){
    localStorage.setItem("task", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("task");
}

showTask();
// window.addEventListener("load", ()=>{
//     const value = localStorage.getItem("task");
//     listContainer.innerHTML = value;
// })