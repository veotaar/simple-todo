import { storage } from "./storage";
import {
  createProject,
  createTask,
  deleteTask,
  getTask,
  editTask,
} from "./utils";
import { formatDistanceToNow, parseISO } from "date-fns";

const btnAddProject = document.querySelector(".btn-add-project");
const btnAddTask = document.querySelector(".btn-add-task");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");
const tasksList = document.querySelector(".tasks-list");
const btnThemeSwitch = document.querySelector(".theme-switch");

const addTaskForm = document.querySelector(".add-task-form");
const btnFormCancel = document.querySelector(".btn-cancel");
const btnSave = document.querySelector(".btn-save");
const formTitle = document.querySelector("#title");
const formDescription = document.querySelector("#description");
const formDate = document.querySelector("#date");
const formPriority = document.querySelector("#priority");

const editTaskForm = document.querySelector(".edit-task-form");
const btnEditCancel = document.querySelector(".btn-edit-cancel");
const btnEdit = document.querySelector(".btn-edit-save");
const editTitle = document.querySelector("#edit-title");
const editDescription = document.querySelector("#edit-description");
const editDate = document.querySelector("#edit-date");
const editPriority = document.querySelector("#edit-priority");

const btnDelete = document.querySelector(".delete");

const clearForm = function () {
  formTitle.value = "";
  formDescription.value = "";
  formDate.value = "";
  formPriority.value = "medium";
};

const setInputDateToToday = function () {
  const now = new Date();
  const day = ("" + now.getDate()).padStart(2, "0");
  const month = ("" + (now.getMonth() + 1)).padStart(2, "0");
  const today = `${now.getFullYear()}-${month}-${day}`;
  formDate.value = today;
  editDate.value = today;
};

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

// toggle dark theme
btnThemeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  if (localStorage.getItem("dark")) localStorage.removeItem("dark");
  else localStorage.setItem("dark", true);
});

const redrawProjects = function () {
  projectsList.innerHTML = "";
  storage.projects.forEach((project) => {
    projectsList.insertAdjacentHTML(
      "afterbegin",
      `<a href="#" class="project" data-id="${project.id}">${project.name}</a>`
    );
  });
  highlightCurrentProject();
};

const highlightCurrentProject = function () {
  const currentProjectID = storage.currentProjectID;
  const project = Array.from(projectsList.children).find(
    (el) => el.dataset.id === currentProjectID
  );
  Array.from(projectsList.children).forEach((el) =>
    el.classList.remove("active")
  );
  project.classList.add("active");
};

const redrawTasks = function () {
  const { currentProjectID } = storage;
  tasksList.innerHTML = "";
  storage.tasks.forEach((task) => {
    if (task.projectID !== currentProjectID) return;
    tasksList.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task" data-id="${task.id}">
        <div class="check">
          <input type="checkbox" />
        </div>
        <div class="task-details">
          <div class="task-head">
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.description}</div>
          </div>
          <div class="task-info">
            <div class="task-due">${task.date}</div>
            <div class="task-priority">P: ${task.priority}</div>
          </div>
          <button class="btn btn-edit">EDIT</button>
        </div>
      </div>
      `
    );
  });
};

btnAddProject.addEventListener("click", function () {
  toggleProjectInput();
  inputProjectName.focus();
  inputProjectName.value = "";
});

btnCancel.addEventListener("click", toggleProjectInput);

btnAdd.addEventListener("click", function () {
  const projectName = inputProjectName.value;
  createProject(projectName);
  redrawProjects();
  redrawTasks();
  inputProjectName.value = "";
  toggleProjectInput();
});

projectsList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("project")) return;
  e.preventDefault();
  storage.setCurrentProject(e.target.dataset.id);
  highlightCurrentProject();
  redrawTasks();
});

btnSave.addEventListener("click", function () {
  const title = formTitle.value;
  const description = formDescription.value;
  const date =
    formDate.value === ""
      ? "no date"
      : formatDistanceToNow(parseISO(formDate.value), {
          addSuffix: true,
        });
  const priority = formPriority.value;

  createTask(title, description, date, priority);

  addTaskForm.classList.add("hidden");
  clearForm();
  btnAddTask.classList.remove("hidden");

  redrawTasks();
});

// show task adding form
btnAddTask.addEventListener("click", function () {
  addTaskForm.classList.remove("hidden");
  formTitle.focus();
  setInputDateToToday();
  btnAddTask.classList.add("hidden");
});

//
btnFormCancel.addEventListener("click", function () {
  addTaskForm.classList.add("hidden");
  btnAddTask.classList.remove("hidden");
  clearForm();
});

// delete / complete a task
tasksList.addEventListener("click", function (e) {
  if (e.target.tagName !== "INPUT") return;
  const taskID = e.target.closest(".task").dataset.id;
  deleteTask(taskID);
  setTimeout(redrawTasks, 250);
});

/////////////////////////////////
// EDITING
// edit a task
tasksList.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;
  const taskID = e.target.closest(".task").dataset.id;
  const task = getTask(taskID);
  storage.currentTaskID = taskID;

  // populate edit form
  editTitle.value = task.title;
  editDescription.value = task.description;
  editPriority.value = task.priority;
  setInputDateToToday();

  // open edit form
  editTaskForm.classList.remove("hidden");
});

// cancel edit form
btnEditCancel.addEventListener("click", function () {
  editTaskForm.classList.add("hidden");
});

btnEdit.addEventListener("click", function (e) {
  const taskID = storage.currentTaskID;

  const newTitle = editTitle.value;
  const newDesc = editDescription.value;
  const newPriority = editPriority.value;
  const newDate =
    editDate.value === ""
      ? "no date"
      : formatDistanceToNow(parseISO(editDate.value), {
          addSuffix: true,
        });

  editTask(taskID, newTitle, newDesc, newDate, newPriority);
  redrawTasks();

  // hide edit form
  editTaskForm.classList.add("hidden");
});
/////////////////////////////////

const deleteEverything = function () {
  storage.projects = [];
  storage.tasks = [];
  storage.currentProjectID = [];
  storage.saveToLocalStorage();

  createProject("Inbox");
  redrawProjects();
  highlightCurrentProject();
  redrawTasks();
};

btnDelete.addEventListener("click", deleteEverything);

// load everything from localStorage
if (localStorage.getItem("projects")) storage.loadProjects();
else createProject("Inbox");

if (localStorage.getItem("tasks")) storage.loadTasks();

if (localStorage.getItem("currentProjectID")) storage.loadCurrentProjectID();

if (localStorage.getItem("dark"))
  document.documentElement.classList.add("dark");

// redrawProjects();
// highlightCurrentProject();
// redrawTasks();

// testing
createProject("Test");
redrawProjects();
highlightCurrentProject();
createTask("the title", "the description", "in 2 months", "high");
createTask("the title", "the description", "in 2 months", "high");
createTask("the title", "the description", "in 2 months", "high");
redrawTasks();
