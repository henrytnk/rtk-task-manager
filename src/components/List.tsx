import { useDispatch } from "react-redux";
import { removeTask, toggleCompleted } from "../store/slices/taskManager";
import { Task } from "../types/task";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface ListProps {
  tasks: Task[];
}

const List = ({ tasks }: ListProps) => {
  const dispatch = useDispatch();

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => {
        const { id, description, isCompleted } = task;

        return (
          <li
            key={id}
            className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => dispatch(toggleCompleted(task))}
                className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span
                className={`text-white ${isCompleted ? "line-through text-gray-400" : ""}`}
              >
                {description}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTask(task))}
              className="text-red-400 hover:text-red-600 transition cursor-pointer"
            >
              <IoIosRemoveCircleOutline size={24} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
