import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [{
        id: 1,
        todoMsg: 'todo message',
        completed: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { }
})

export const TodoProvider = TodoContext.Provider
export const useTodo = () => useContext(TodoContext)
