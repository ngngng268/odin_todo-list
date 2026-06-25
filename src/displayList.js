import { projectList } from "./index.js";
import { todoCardMaker } from "./toDoCardMaker.js";

function displayList() {
    projectList.forEach(element => {
        const contentContainer = document.querySelector(".content");
        const projectCard = document.createElement("div");
        const projectTitle = document.createElement("h3");
        
        element.todoList.forEach(element => {
            todoCardMaker();
        });
    });
};

export { displayList }