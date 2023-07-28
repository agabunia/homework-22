import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { doneAction, removeTodoAction } from "../store/todo/todo.actions"

const ToDoList = () => {
    const todoList = useSelector((state) => state.todo.todoList)
    const dispatch = useDispatch()

    const removeTask = (item) => {
        dispatch(removeTodoAction(item))
    }

    const doneTask = (item) => {
        dispatch(doneAction(item))
        dispatch(removeTodoAction(item))
    }

    return (
        <div>
            <Link to={'/'}>To Create</Link>
            <Link to={'/done'}>Done Tasks</Link>
            <h2>To Do List</h2>
            {todoList.map((item) => <div key={item}> 
                {item}
                <button onClick={() => removeTask(item)}>Delete</button>
                <button onClick={() => doneTask(item)}>Done</button> 
            </div>)}
        </div>
    )
}

export default ToDoList