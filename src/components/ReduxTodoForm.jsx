import { useTheme } from "../context/ThemeContext";
import '../components/TodoForm.css';
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

const ReduxTodoForm = () => {

    const { theme } = useTheme();
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }


    return <>
        <div className={`form-container ${theme}`}>
            <form onSubmit={handleSubmit} className="register-form keep-light">
                <h2>Todo</h2>

                <div className="input-group">
                    <label htmlFor="task">Add Task</label>
                    <input onChange={handleChange} value={text} type="text" id="task" placeholder="Please Enter Task" required />
                </div>

                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
    </>
}

export default ReduxTodoForm;