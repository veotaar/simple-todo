import { Project } from "./project";
import { Storage } from "./storage";

export const createProject = function (projectName) {
  const project = new Project(projectName);
  Storage.addProject(project);
};
