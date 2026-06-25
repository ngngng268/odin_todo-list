import { projectList } from "./index.js";
import {todoCardMaker} from "./toDoCardMaker.js";

function displayList () {
    projectList.forEach(element => {
            element.todoList.forEach(element => {
                todoCardMaker();
            });
        });
};

export {displayList}