import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTodo } from "../context/TodoContext";
import './TodoList.css';

const TodoList = () => {

    const { theme } = useTheme();
    const { todos, setTodos, deleteTodo, toggleComplete } = useTodo();

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        if (todos && todos.length > 0)
              setTodos(todos);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
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
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</span>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>)
}

export default TodoList;