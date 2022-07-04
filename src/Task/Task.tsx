import { PlusCircle } from "phosphor-react"
import styleTask from "./Task.module.css"

export function Task() {
    return(
        <div>
            <section className={styleTask.addTask}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button type="button">
                    Criar <PlusCircle className={styleTask.plusCircle} size={20}/>
                </button>
            </section>
        </div>
    )
}