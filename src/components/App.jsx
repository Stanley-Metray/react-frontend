import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";

const App = () => {
    return <>
        <NavBar />
        <TodoProvider>
            <TodoForm />
            <TodoList />
        </TodoProvider>
    </>
}

export default App;