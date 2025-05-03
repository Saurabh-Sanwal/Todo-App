import {  useState } from "react"
import "./Todo.css"
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorageTodoData ,setLocalStorageTodoData } from "./TodoLocalStorage";
export const Todo =()=>{
  
    const [task, setTask]= useState(()=>
        getLocalStorageTodoData()
    )

  

    const handleFormSubmit=(inputValue)=>{  
        const {id, content , checked}= inputValue
        if(!content)return;
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
        if(ifTodoContentMatched)return;
       setTask((prevTask)=>[...prevTask,{id:id , content:content , checked:checked}]);
    }
// delete todo function
 const handleDeleteTodo=(value)=>{
    const updatedTask = task.filter((number) => value != number.content);
      setTask(updatedTask);
   }
   // todo handlecleartododata functionality
   const handleClear = ()=>{
    setTask([])
   }
   // todo  add data  to local storage
   setLocalStorageTodoData(task)

// todo handleclearcheckedTodo functionality
const handlecheckTodo = (contentToCheck) => {
    const updatedTask = task.map((currtask) => {
      if (currtask.content === contentToCheck) {
        return { ...currtask, checked: !currtask.checked };
      } else {
        return currtask;
      }
    });
    setTask(updatedTask);
  };
  
    return(
        <section className="todo-container">
            <header>
                <h1> Todo List</h1>
              <TodoDate/>
            </header>
            <TodoForm  onAddTodo={handleFormSubmit}/>
    <section className="myUnOrdlist">
        <ul>
            {
                task.map((curr)=>{
                    return (
                      <TodoList  key={curr.id} data={curr.content} onHandleDeleteTodo={handleDeleteTodo}
                     checked={curr.checked}   onHandleCheckTodo ={handlecheckTodo}/>
                    )

                })
            }
        </ul>

    </section>
    <section>
        <button className="clear-btn" onClick={handleClear}>Clear All</button>
    </section>
        </section>
    )
}