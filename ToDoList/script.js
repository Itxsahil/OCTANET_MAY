function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
    
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);
  
    var doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("done");
    doneButton.onclick = function() {
      if (taskText.style.textDecoration === "line-through") {
        taskText.style.textDecoration = "none";
        doneButton.textContent = "Done";
      } else {
        taskText.style.textDecoration = "line-through";
        doneButton.textContent = "Undo";
      }
    };
    li.appendChild(doneButton);
  
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    removeButton.onclick = function() {
      taskList.removeChild(li);
    };
    li.appendChild(removeButton);
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  