import { todoReducer } from "./todo/todo.reducers";
const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})