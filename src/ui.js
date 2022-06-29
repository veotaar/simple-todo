"use strict";

import { Storage } from "./storage";

const btnAddProject = document.querySelector(".btn-add-project");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

btnAddProject.addEventListener("click", function () {
  toggleProjectInput();
  inputProjectName.focus();
  inputProjectName.value = "";
});

btnCancel.addEventListener("click", toggleProjectInput);
