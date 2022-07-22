import { v4 as uuidv4 } from "uuid";

export class Task {
  constructor(title, description, date, priority, projectID) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.projectID = projectID;
    this.id = uuidv4();
  }
}
