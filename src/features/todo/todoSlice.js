import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
}

const initialState = {
    todos: loadTodos()
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload,
                completed : false
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        toggleComplete: (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id===action.payload? {...todo, completed: !todo.completed} : todo);
        }
    }
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;