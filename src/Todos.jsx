import { use } from "react";
import Todo from "./Todo";

export default function Todos({promiseTodos}){
   const todos= use(promiseTodos);
  
    return(
        <div className="cards">
            <h1>TODOS</h1>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} ></Todo>)
            }
        </div>
    )
}