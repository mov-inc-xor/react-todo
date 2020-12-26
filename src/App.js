import "./App.css";
import CenterContainer from "./components/containers/CenterContainer";
import MainContainer from "./components/containers/MainContainer";
import TodoControl from "./components/TodoControl/TodoControl";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header/Header";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <CenterContainer>
      <MainContainer>
        <Header>
          <h1>Todo</h1>
        </Header>
        <TodoProvider>
          <TodoInput />
          <TodoControl />
          <TodoList />
        </TodoProvider>
      </MainContainer>
    </CenterContainer>
  );
}

export default App;
