import { useContext, createContext, useState } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "",
        completed: false
    }],

    addTodo: () => { },
    deleteTodo: () => { },
    updateTodo: () => { },
    toggleComplete: () => { }
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos(prev => [{ id: Date.now(), todo, completed: false }, ...prev]);
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id));
    }

    const updateTodo = (id, newTodo) => {
        setTodos(prev => prev.map((todo) => todo.id === id ? { ...todo, todo: newTodo } : todo));
    }

    const toggleComplete = (id) => {
        setTodos(prev => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    return <TodoContext.Provider value={{todos, setTodos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
        {children}
    </TodoContext.Provider>
}