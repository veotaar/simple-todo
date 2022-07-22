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

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskID) {
    const indexToDelete = this.tasks.findIndex((task) => task.id === taskID);
    this.tasks.splice(indexToDelete, 1);
  }

  setCurrentProject(projectID) {
    this.currentProjectID = projectID;
  }
}

export const storage = new Storage();
