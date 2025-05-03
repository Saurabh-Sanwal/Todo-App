import { MdCheck,MdDeleteForever } from "react-icons/md"

export const TodoList = ({ data, checked ,  onHandleDeleteTodo, onHandleCheckTodo})=>{
    return(
        <li  className="todo-item">
        <span className={checked?"checkList":"nonCheckList"}>{data}</span>
        <button className="check-btn" onClick={()=>{onHandleCheckTodo(data)}}><MdCheck/>
        </button>
        <button onClick={()=>{onHandleDeleteTodo(data)}}><MdDeleteForever/>
        </button>
    </li>
    )
}