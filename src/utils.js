import { Project } from "./project";
import { storage } from "./storage";

export const createProject = function (projectName) {
  const project = new Project(projectName);
  storage.addProject(project);
};
