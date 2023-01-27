import { TaskPropsComponent } from "../models/TaskModels";

export function setLocalStorageTask(tasks: TaskPropsComponent[]){
    localStorage.setItem("todo-list-v1", JSON.stringify(tasks))
}

export function getLocalStorageTask(){
    const data = localStorage.getItem("todo-list-v1")
    return data ? JSON.parse(data) : []

    
}