import { configureStore } from "@reduxjs/toolkit";
import taskManager from './slices/taskManager';

export const globalStore = configureStore({
  reducer: {
    taskReducer: taskManager
  }
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;