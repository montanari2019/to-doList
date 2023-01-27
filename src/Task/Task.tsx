import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskProps } from "../models/TaskModels";
import styleTask from "./Task.module.css";



export function Task({ id, title, concluded, taskConcluded, onDeleteTask }: TaskProps) {
  const [check, setCheck] = useState<boolean>(concluded);

  function concludedTaskCheck() {
    if (check == true) {
      setCheck(false)
      taskConcluded(id, check);
    } else {
      setCheck(true)
      taskConcluded(id, check);
    }
  }

  function deleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={check == true ? styleTask.containerCheck : styleTask.container}>
      <div className={styleTask.display}>

        <div>
          <label className={styleTask.checkContainer}>
            <input
              type="checkbox"
              onClick={concludedTaskCheck}
            />
            <span className={styleTask.checkbox}></span>
          </label>

          <strong className={check == true ? styleTask.strongCheck : styleTask.strong}>
            {title}
          </strong>
        </div>
        <div className={styleTask.trash}>
          <Trash onClick={deleteTask}  size={24} />
        </div>
      </div>
    </div>

  );
}
