
let tasks = [];

function addTask(text) {
  if (!text) return;
  tasks.push({ text: text, done: false });
  console.log("Task added:", text);
}


function displayTasks() {
  console.log("\n--- Task List ---");
  
  if (tasks.length === 0) {
    console.log("No tasks available");
    return;
  }

  tasks.forEach((task, index) => {
    let status = task.done ? "✅ Done" : "❌ Not Done";
    console.log(index + ". " + task.text + " - " + status);
  });
}

function toggleTask(index) {
  if (tasks[index]) {
    tasks[index].done = !tasks[index].done;
    console.log("Task updated:", tasks[index].text);
  } else {
    console.log("Invalid index");
  }
}


function editTask(index, newText) {
  if (tasks[index] && newText) {
    tasks[index].text = newText;
    console.log("Task edited:", newText);
  } else {
    console.log("Invalid edit");
  }
}


function deleteTask(index) {
  if (tasks[index]) {
    console.log("Task deleted:", tasks[index].text);
    tasks.splice(index, 1);
  } else {
    console.log("Invalid index");
  }
}

addTask("Bike servicing");
addTask("Go to Gym");
addTask("Complete Assignment");

displayTasks();

toggleTask(1);   
displayTasks();

editTask(2, "Complete JAva Script Assignment");
displayTasks();

deleteTask(0);   
displayTasks();