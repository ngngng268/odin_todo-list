import { projectList } from "./index.js";

class project {
    constructor (name) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.todoList = [];
    };
    edit (newName) {
        this.name = newName;
    };

};

function addNewProject (name) {
    let newProject = new project(name);
    projectList.push(newProject);
    return {newProject};
}

export {project, addNewProject};