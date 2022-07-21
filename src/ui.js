import { storage } from "./storage";
import { createProject, createTask } from "./utils";

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

const clearForm = function () {
  formTitle.value = "";
  formDescription.value = "";
  formDate.value = "";
  formPriority.value = "medium";
};

const toggleDark = function () {
  document.documentElement.classList.toggle("dark");
};

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

// eye protection
btnThemeSwitch.addEventListener("click", toggleDark);

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

// TODO handle time input with date-fns
const redrawTasks = function () {
  const { currentProjectID } = storage;
  tasksList.innerHTML = "";
  storage.tasks.forEach((task) => {
    if (task.id !== currentProjectID) return;
    tasksList.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task">
        <div class="check">
          <input type="checkbox" />
        </div>
        <div class="task-details">
          <div class="task-head">
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.description}</div>
          </div>
          <div class="task-info">
            <div class="task-due">30 Aug</div>
            <div class="task-priority">${task.priority}</div>
          </div>
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
  const date = "32 Aug";
  const priority = formPriority.value;

  createTask(title, description, date, priority);

  addTaskForm.classList.add("hidden");
  clearForm();

  redrawTasks();
});

btnAddTask.addEventListener("click", function () {
  addTaskForm.classList.remove("hidden");
  formTitle.focus();
});

btnFormCancel.addEventListener("click", function () {
  addTaskForm.classList.add("hidden");
  clearForm();
});
