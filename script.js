function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskItem.addEventListener("click", toggleTask);
  
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
  
  function toggleTask() {
    this.classList.toggle("completed");
  }
  