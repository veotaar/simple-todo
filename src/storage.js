class Storage {
  constructor() {
    this.projects = [];
    this.currentProjectID = "";
    this.tasks = [];
  }

  addProject(project) {
    this.projects.push(project);
    this.currentProjectID = project.id;
  }

  setCurrentProject(projectID) {
    this.currentProjectID = projectID;
  }
}

export const storage = new Storage();
