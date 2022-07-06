"use strict";

import { Storage } from "./storage";
import { createProject } from "./utils";

const root = document.documentElement;
const btnAddProject = document.querySelector(".btn-add-project");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");
const btnThemeSwitch = document.querySelector(".theme-switch");

const toggleDark = function () {
  root.classList.toggle("dark");
};

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

const redrawProjects = function () {
  projectsList.innerHTML = "";
  Storage.projects.forEach((project) => {
    projectsList.insertAdjacentHTML(
      "afterbegin",
      `<a href="#" class="project" data-id="${project.id}">${project.name}</a>`
    );
  });
};

// eye protection
btnThemeSwitch.addEventListener("click", toggleDark);

// TODO: write this
const highlightCurrentProject = function () {
  console.log(Array.from(projectsList.children));
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
  console.log(e.target);
  Storage.setCurrentProject(e.target.dataset.id);
  highlightCurrentProject();
});
