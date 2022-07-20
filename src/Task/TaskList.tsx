import { Trash } from "phosphor-react";
import { useState } from "react";
import styleTaskList from "./TaskList.module.css";

export function TaskList() {

  const [check, setCheck] = useState<Boolean>(false)

  return (
    <div className={ check==true ? styleTaskList.containerCheck : styleTaskList.container}>
      <label className={styleTaskList.checkContainer}>
        <input type="checkbox" onClick={() => check==false ? setCheck(true) : setCheck(false)}/>
        <span className={styleTaskList.checkbox}></span>
      </label>
      <strong className={ check==true ? styleTaskList.strongCheck : styleTaskList.strong}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </strong>
      <Trash className={styleTaskList.trash} size={24} />

    </div>
  );
}
