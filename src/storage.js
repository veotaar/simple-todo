class Manager {
  constructor() {
    this.projects = [];
    this.currentProjectID = "";
    this.currentTaskID = "";
    this.tasks = [];
  }

  addProject(project) {
    this.projects.push(project);
    this.currentProjectID = project.id;
    this.saveToLocalStorage();
  }

  addTask(task) {
    this.tasks.push(task);
    this.saveToLocalStorage();
  }

  deleteTask(taskID) {
    const indexToDelete = this.tasks.findIndex((task) => task.id === taskID);
    this.tasks.splice(indexToDelete, 1);
    this.saveToLocalStorage();
  }

  editTask(taskID, newTitle, newDesc, newDate, newPriority) {
    const indexToEdit = this.tasks.findIndex((task) => task.id === taskID);
    this.tasks[indexToEdit].title = newTitle;
    this.tasks[indexToEdit].description = newDesc;
    this.tasks[indexToEdit].date = newDate;
    this.tasks[indexToEdit].priority = newPriority;
    this.saveToLocalStorage();
  }

  getTask(taskID) {
    const index = this.tasks.findIndex((task) => task.id === taskID);
    return this.tasks[index];
  }

  setCurrentProject(projectID) {
    this.currentProjectID = projectID;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    localStorage.setItem("currentProjectID", this.currentProjectID);
  }

  loadProjects() {
    this.projects = JSON.parse(localStorage.getItem("projects"));
  }

  loadTasks() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  loadCurrentProjectID() {
    this.currentProjectID = localStorage.getItem("currentProjectID");
  }
}

export const storage = new Manager();
