import { PlusCircle } from "phosphor-react";
import { TaskList } from "./TaskList";
import styleTask from "./Task.module.css";

import clipbooard from "./../assets/clipbooard.svg";

const tasksList = [
  {
    id: 1,
    title:
      "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, sed diam, sed diam, sed diam, sed diam, sed diam, sed diam,",
    concluded: false,
  },
  {
    id: 2,
    title: "Limpar e organizar sua casa",
    concluded: false,
  },
  {
    id: 3,
    title: "Solicitar estorno da sua compra na pichau",
    concluded: false,
  },
  {
    id: 5,
    title:
      "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, sed diam, sed diam, sed diam, sed diam, sed diam, sed diam,",
    concluded: false,
  },
];

export function Task() {
  function concludedTask(id: number, checked: boolean) {
    const taskConclud = tasksList.map((tasks) => {
      if (tasks.id === id && checked === false) {
        tasks.concluded = true;
      } else if (tasks.id === id && checked === true) {
        tasks.concluded = false;
      }
      return tasks;
    });

    console.log(taskConclud);
  }

  return (
    <div className={styleTask.globalContainer}>
      <section className={styleTask.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">
          Criar <PlusCircle className={styleTask.plusCircle} size={20} />
        </button>
      </section>
      <section className={styleTask.sectionTasks}>
        <strong className={styleTask.taskTitle}>
          Tarefas Criadas <span>0</span>
        </strong>

        <strong className={styleTask.taskConcluded}>
          Concluidas <span>0</span>
        </strong>
      </section>

      <section
        className={
          tasksList.length > 0
            ? styleTask.clipboardTrueTask
            : styleTask.clipboard
        }
      >
        <img src={clipbooard} />
        <strong className={styleTask.clipboardStrong01}>
          Você ainda não tem tarefas cadastradas
        </strong>

        <strong className={styleTask.clipboardStrong02}>
          Crie tarefas e organize seus itens a fazer
        </strong>
      </section>

      <section className={styleTask.tasksList}>
        {/* <TaskList/>
      <TaskList/>
      <TaskList/> */}
        {tasksList.map((tasks) => {
          return (
            <TaskList
              key={tasks.id}
              id={tasks.id}
              title={tasks.title}
              concluded={tasks.concluded}
              taskConcluded={concludedTask}
            />
          );
        })}
      </section>
    </div>
  );
}
