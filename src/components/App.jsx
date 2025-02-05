import NavBar from "./NavBar";
import ReduxTodoList from "./ReduxTodoList";
import { TodoProvider } from "../context/TodoContext";
import ReduxTodoForm from "./ReduxTodoForm";

const App = () => {    
    return <>
        <NavBar />
        <TodoProvider>
            <ReduxTodoForm />
            <ReduxTodoList/>
        </TodoProvider>
    </>
}

export default App;