/** Just following naming conventions todoSlice is not necessary name. */
import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world"
        },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        /** 
         * Here, functions need to be defined, unlike context API
         * And it has access to state and action.
         * Actions are some values about todos. Like maybe id, text etc.
         */
        addTodo: (state, action) => {
            const todo = {
                id:nanoid() , // Earlier we were doing Date.now()
                text: action.payload // we are sending text in payload, so no need to write action.payload.text since it is same name as the key.
            }
            // Earlier in redux, this had more steps.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload )// payload.id not necessary
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                todo.id === action.payload.id ? action.payload : todo
            })
        },
        
    }
})

// 2 parts to export todoSlice, export functionalities
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// store needs to be aware of the reducers.
export default todoSlice.reducer