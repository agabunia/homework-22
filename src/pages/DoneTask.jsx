import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const DoneTask = () => {
    const { doneList } = useSelector((state) => state.todo)

    return (
        <div>
            <Link to={'/'}>To Create</Link>
            <Link to={'/todo'}>To List</Link>
            <h2>Done List</h2>
            {doneList.map((item) => <div key={item}> 
                {item}
            </div>)}
        </div>
    )
}

export default DoneTask