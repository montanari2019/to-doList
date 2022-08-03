import styleTaskList from "./TaskList.module.css";
import clipbooard from "./../assets/clipbooard.svg";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import {TaskPropsComponent } from "../models/TaskModels";

export function TaskList() {


  const [titleTask, setTitleTask] = useState("")

  const [tasks, setTasks] = useState<TaskPropsComponent[]>([])

  const [countCompletedTasks, setCountCompletedTasks] = useState<TaskPropsComponent[]>([])
 

  const isNewTaskEmpty = titleTask.length === 0

  function concludedTask(id: number, checked: boolean) {
   tasks.map((task) => {
      if (task.id === id && checked === false) {
        task.concluded = true;
      } else if (task.id === id && checked === true) {
        task.concluded = false;
      }
      return tasks;
    });
    setTasks(tasks)
    console.log(tasks)
    setCountCompletedTasks(tasks.filter(task => {
      return task.concluded == true
    }))
  }

  function handleAddTask(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setTitleTask(event.target.value)

  }

  function handleCreatedTask(event: FormEvent) {
    event.preventDefault()
    console.log("chamando função de add task") 
    const taskCreated = {
      id: new Date().getTime(),
      title: titleTask,
      concluded: false
    }
    
    setTasks([...tasks, taskCreated])
    setTitleTask('')
    
    
  }

  
  
  function handleDeleteTask(taskIdToDelete: number) {
    const tasksWithoutTask = tasks.filter( task =>  {
      return task.id !== taskIdToDelete
    })
    setTasks(tasksWithoutTask)
  }
  return (
    <div className={styleTaskList.globalContainer}>
      <form onSubmit={handleCreatedTask} className={styleTaskList.addTask}>
        <input placeholder="Adicione uma nova tarefa" value={titleTask} onChange={handleAddTask} />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle className={styleTaskList.plusCircle} size={20} />
        </button>
      </form>
      <section className={styleTaskList.sectionTasks}>
        <strong className={styleTaskList.taskTitle}>
          Tarefas Criadas <span>{tasks.length}</span>
        </strong>

        <strong className={styleTaskList.taskConcluded}>
          Concluidas <span>{countCompletedTasks.length}</span>
        </strong>
      </section>

      <section className={tasks.length > 0 ? styleTaskList.clipboardTrueTask : styleTaskList.clipboard}>
        <img src={clipbooard} />
        <strong className={styleTaskList.clipboardStrong01}>
          Você ainda não tem tarefas cadastradas
        </strong>

        <strong className={styleTaskList.clipboardStrong02}>
          Crie tarefas e organize seus itens a fazer
        </strong>
      </section>

      <section className={styleTaskList.tasksList}>
        {tasks.map((tasks) => {
          return (
            <Task
              key={tasks.id}
              id={tasks.id}
              title={tasks.title}
              concluded={tasks.concluded}
              taskConcluded={concludedTask}
              onDeleteTask={handleDeleteTask}
            />
          );
        })}
      </section>
    </div>
  );
}
