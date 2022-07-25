class Storage {
  constructor() {
    this.projects = [];
    this.currentProjectID = "";
    this.currentTaskID = "";
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

  editTask(taskID, newTitle, newDesc, newDate, newPriority) {
    const indexToEdit = this.tasks.findIndex((task) => task.id === taskID);
    this.tasks[indexToEdit].title = newTitle;
    this.tasks[indexToEdit].description = newDesc;
    this.tasks[indexToEdit].date = newDate;
    this.tasks[indexToEdit].priority = newPriority;
  }

  getTask(taskID) {
    const index = this.tasks.findIndex((task) => task.id === taskID);
    return this.tasks[index];
  }

  setCurrentProject(projectID) {
    this.currentProjectID = projectID;
  }
}

export const storage = new Storage();
