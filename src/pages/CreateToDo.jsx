import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"
import { Link } from "react-router-dom"

const CreateToDo = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodoAction(value))
        setValue('')
    }

    return (
        <div>
            <Link to={'/todo'}>To List</Link>
            <Link to={'/done'}>Done Tasks</Link>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateToDo