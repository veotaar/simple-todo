"use strict";

import { storage } from "./storage";
import { createProject } from "./utils";

const btnAddProject = document.querySelector(".btn-add-project");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");
const btnThemeSwitch = document.querySelector(".theme-switch");

const toggleDark = function () {
  document.documentElement.classList.toggle("dark");
};

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

// eye protection
btnThemeSwitch.addEventListener("click", toggleDark);

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
  inputProjectName.value = "";
});

projectsList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("project")) return;
  storage.setCurrentProject(e.target.dataset.id);
  highlightCurrentProject();
});
