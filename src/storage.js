export const Storage = (function () {
  let projects = [];
  let currentProjectID = "";

  const addProject = function (project) {
    projects.push(project);
  };

  const setCurrentProject = function (projectID) {
    currentProjectID = projectID;
  };

  return {
    projects,
    currentProjectID,
    addProject,
    setCurrentProject,
  };
})();
