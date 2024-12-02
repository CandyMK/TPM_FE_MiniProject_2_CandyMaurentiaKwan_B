import { addTask, renderTasks, removeTask } from "./taskManager.js";

let tasks = [];

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = {
        id: Date.now(),
        title: taskInput.value,
        completed: false,
    };
    tasks = addTask(tasks, newTask);
    taskInput.value = "";
    renderTasks(tasks, taskList);
});

taskList.addEventListener("click", (event) => {
    let target = event.target;

    if(target.tagName === "IMG") {
        target = target.closest("button");
    }

    if(target && target.classList.contains("delete-btn")) {
        const taskId = Number(target.dataset.id);
        const updatedTasks = removeTask(tasks, taskId);
        tasks.length = 0;
        tasks.push(...updatedTasks);
        renderTasks(tasks, taskList);
    }

    if(event.target.classList.contains("task-checkbox")) {
        const taskId = Number(event.target.id.split("-")[1]);
        const task = tasks.find((t) => t.id === taskId);
        if(task){
            task.completed = event.target.checked;
            renderTasks(tasks, taskList);
        }
    }
});