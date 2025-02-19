import Form from "./components/Form";
import List from "./components/List";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const tasks = useSelector((state: RootState) => state.taskReducer.taskList);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white text-center mb-4">Task Manager</h1>
        <Form />
        <List tasks={tasks} />
      </div>
    </main>
  );
}

export default App;
