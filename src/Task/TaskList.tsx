import { Trash } from "phosphor-react";
import { useState } from "react";
import styleTaskList from "./TaskList.module.css";

interface TaskList {
  id: number;
  title: string;
  concluded: boolean;
  taskConcluded: (id: number, checked: boolean) => void;
}

export function TaskList({ id, title, concluded, taskConcluded }: TaskList) {
  const [check, setCheck] = useState<boolean>(concluded);

  function concludedTaskCheck(){
    if (check == true){
      setCheck(false)
      taskConcluded(id, check);
    }else{
      setCheck(true)
      taskConcluded(id, check);
    }
  }

  return (
    <div className={check == true ? styleTaskList.containerCheck : styleTaskList.container}>
      <div className={styleTaskList.display}>
        <label className={styleTaskList.checkContainer}>
          <input
            type="checkbox"
            onClick={concludedTaskCheck}
          />
          <span className={styleTaskList.checkbox}></span>
        </label>
        <strong
          className={
            check == true ? styleTaskList.strongCheck : styleTaskList.strong
          }
        >
          {title}
        </strong>
        <Trash className={styleTaskList.trash} size={24} />
        </div>
      </div>
    
  );
}
