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

export {project};