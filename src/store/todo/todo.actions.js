export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
})

export const removeTodoAction = (payload) => ({
    type: 'REMOVE_TODO',
    payload
})

export const doneAction = (payload) => ({
    type: 'ADD_DONE',
    payload
})