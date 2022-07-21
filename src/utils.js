import { Project } from "./project";
import { storage } from "./storage";
import { Task } from "./task";

export const createProject = function (projectName) {
  const project = new Project(projectName);
  storage.addProject(project);
};

export const createTask = function (title, description, date, priority) {
  const { currentProjectID } = storage;
  const task = new Task(title, description, date, priority, currentProjectID);
  storage.addTask(task);
};
