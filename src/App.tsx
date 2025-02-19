import Form from "./components/Form"
import List from "./components/List"
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const tasks = useSelector((state: RootState) => state.taskReducer.taskList);

  return (
    <main>
      <h1>Task Manager</h1>
      <Form />
      <List tasks={tasks} />
    </main>
  )
}

export default App
