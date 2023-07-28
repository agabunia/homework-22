const initialState = {
    todoList: [],
    doneList: ['hello world']
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { 
                todoList: [...state.todoList, action.payload],
                doneList: [...state.doneList]
            }
        case 'REMOVE_TODO':
            return { 
                todoList: state.todoList.filter((task) => task !== action.payload),
                doneList: [...state.doneList]
            }
        case 'ADD_DONE':
            return {
                doneList: [...state.doneList, action.payload],
                todoList: state.todoList.filter((task) => task !== action.payload)
            }
        default:
            return state
    }
}