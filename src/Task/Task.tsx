import { PlusCircle } from "phosphor-react";
import { TaskList } from "./TaskList";
import styleTask from "./Task.module.css";

const tasksList = [
  {
    id: 1,
    title: "Fazer relatório do controle interno",
    concluded: false,
  },
  {
    id: 2,
    title: "Limpar e organizar sua casa",
    concluded: true,
  },
  {
    id: 3,
    title: "Solicitar estorno da sua compra na pichau",
    concluded: false,
  },
  {
    id: 5,
    title: "Conbversar com sua mãe",
    concluded: false,
  },
];

export function Task() {
  return (
    <div className={styleTask.containerGlobal}>
      <section className={styleTask.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">
          Criar <PlusCircle className={styleTask.plusCircle} size={20} />
        </button>
      </section>
      <section className={styleTask.container}>
        <strong>
          Tarefas Criadas <span>0</span>
        </strong>

        <strong>
          Concluidas <span>0</span>
        </strong>
      </section>
    </div>
  );
}