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
    }
}