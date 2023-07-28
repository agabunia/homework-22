import CreateToDo from "../pages/CreateToDo";
import DoneTask from "../pages/DoneTask";
import ToDoList from "../pages/ToDoList";

const routes = [
    {
        element: <CreateToDo />,
        path: '/'
    },
    {
        element: <ToDoList />,
        path: '/todo'
    },
    {
        element: <DoneTask />,
        path: '/done'
    }
]

export default routes