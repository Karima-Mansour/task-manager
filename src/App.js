import Header from "./components/Header"
import TaskCard from "./components/TaskCard"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

function App() {
  return (
    <div>
      <Header/>
      <TaskCard/>
      <TaskList/>
      <TaskForm/>
    </div>
  );
}

export default App;
