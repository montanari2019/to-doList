import styleTaskList from "./TaskList.module.css";

export function TaskList() {
  return (
    <div className={styleTaskList.container}>
      <div className={styleTaskList.strong}>
        <div>Tarefas Criadas <span>0</span></div>

        <div>Concluidas <span>0</span></div>
      </div>
    </div>
  );
}
