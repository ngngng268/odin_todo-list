import { projectList } from "./index.js";
import { addNewProject } from "./projectClass.js";

class todoItem {
    constructor (title, description, dueDate, priority, completion, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completion = completion;
        this.project = project;
    };
    edit (newTitle, newDescription, newDueDate, newPriority, newCompletion, newProject) {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        this.completion = newCompletion;
        this.project = newProject;
        this.id = crypto.randomUUID();
    }
}

function addNewTodoItem (title, description, dueDate, priority, completion, project) {
    let newTodoItem = new todoItem(title, description, dueDate, priority, completion, project);
    for (let i =0; i <projectList.length ; i++) {
        if (projectList[i].name === newTodoItem.project) {
            projectList[i].todoList.push(newTodoItem);
            continue
        } else {
            addNewProject(`${newTodoItem.project}`).todoList.push(newTodoItem);
        }
    };
    return {newTodoItem};
}

export {todoItem, addNewTodoItem}