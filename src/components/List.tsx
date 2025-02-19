import { useDispatch } from 'react-redux';
import { removeTask, toggleCompleted } from '../store/slices/taskManager';
import { Task } from '../types/task';
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface ListProps {
  tasks: Task[];
}

const List = ({ tasks }: ListProps) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => {
        const { id, description, isCompleted } = task;

        return (
          <li key={id}>
            {description}
            <input type="checkbox" checked={isCompleted} onChange={() => dispatch(toggleCompleted(task))}/>
            <button onClick={() => dispatch(removeTask(task))}>
              <IoIosRemoveCircleOutline />
            </button>
          </li>
        );
      })}
    </ul>
  )
}

export default List