import { useTheme } from "../context/ThemeContext";
import './TodoList.css';
import { removeTodo, toggleComplete } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ReduxTodoList = () => {

    const { theme } = useTheme();
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (todos && Array.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    if (todos && todos.length === 0) return (<div className={`todo-container ${theme}`}>
        <h3 className="text-white text-center">No todos yet! please add from above.</h3>
    </div>)

    return (<div className={`todo-container ${theme}`}>
        <h3 className="text-center">Todos</h3>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleComplete(todo.id))}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</span>
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>)
}

export default ReduxTodoList;