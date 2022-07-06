export const Storage = (function () {
  let projects = [];
  let currentProjectID = "";
  let tasks = [];

  const addProject = function (project) {
    projects.push(project);
    console.log(projects);
  };

  const setCurrentProject = function (projectID) {
    currentProjectID = projectID;
    console.log(currentProjectID);
  };

  return {
    projects,
    currentProjectID,
    addProject,
    setCurrentProject,
    tasks,
  };
})();
