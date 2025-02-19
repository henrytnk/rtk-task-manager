import { defaultTasks } from '../../data/defaultTasks';
import { Task } from '../../types/task';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  taskList: Task[];
}

const initialState: TaskState = {
  taskList: defaultTasks
}

const { actions, reducer } = createSlice({
  name: 'taskManager',
  initialState,
  reducers: {
    addTask: (state: TaskState, action: { payload: string; }) => {
      const newTask: Task = {
        id: state.taskList[state.taskList.length - 1].id + 1,
        description: action.payload,
        isCompleted: false
      }

      state.taskList.push(newTask);
    },
    removeTask: (state: TaskState, action: PayloadAction<Task>) => {
      const id = action.payload.id;

      state.taskList = state.taskList.filter(task => task.id !== id);
    },
    toggleCompleted: (state: TaskState, action: PayloadAction<Task>) => {
      const id = action.payload.id;
      const current = state.taskList.find(task => task.id === id);

      if (current) {
        current.isCompleted = !current.isCompleted;
      }
    }
  }
});

export const { addTask, removeTask, toggleCompleted } = actions;
export default reducer;