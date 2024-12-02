export const addTask = (tasks, newTask) => {
  return [...tasks, newTask];
};

export const renderTasks = (tasks, container) => {
  container.innerHTML = "";

  const taskBox = container.closest(".task-box");

  if (tasks.length === 0) {
    taskBox.style.display = "none";
  } else {
    taskBox.style.display = "block";
  }

  tasks.forEach((task) => {
      const taskElement = document.createElement("li");
      taskElement.classList.add("task");

      if(task.completed) {
        taskElement.classList.add("completed");
      }

      taskElement.innerHTML = `
          <label class="custom-checkbox">
            <input type="checkbox" class="task-checkbox" id="checkbox-${task.id}" ${task.completed ? "checked" : ""}>
            <span class="checkmark"></span>
          </label>
          
          <span class="task-title ${task.completed ? "completed" : ""}">${task.title}</span>
          
          <button data-id="${task.id}" class="delete-btn">
            <img src="assets/delete.png" alt="Close Icon">
          </button>
      `;
      container.appendChild(taskElement);
  });
};

export const removeTask = (tasks, id) => {
  return tasks.filter((task) => task.id !== id);
};
