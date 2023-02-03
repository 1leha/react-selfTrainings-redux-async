import { initTasks } from './initTasksState';

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addTask: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: { id: nanoid(), text, completed: false },
        };
      },
    },

    // toggleCompleted(state, action) {
    //   return state.map(task => {
    //     if (task.id !== action.payload) return task;

    //     return { ...task, completed: !task.completed };
    //   });
    // },

    toggleDelete(state, action) {
      return state.filter(task => task.id !== action.payload);
    },

    // fetch tasks Reducers
    fetchTasksPending(state) {
      state.isLoading = true;
    },
    fetchTasksSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchTasksReject(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add Tasks To Server Reducers
    addTaskPending(state) {
      state.isLoading = true;
    },
    addTaskSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    },
    addTaskReject(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add toggleCompleted Reducers
    toggleTaskPending(state) {
      state.isLoading = true;
    },
    toggleTaskSuccess(state, action) {
      return {
        ...state,
        data: state.data.map(task => {
          if (task.id !== action.payload) return task;
          return { ...task, completed: !task.completed };
        }),
      };
    },
    toggleTaskReject(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add deleteTask Reducers
    deleteTaskPending(state) {
      state.isLoading = true;
    },
    deleteTaskSuccess(state, action) {
      return {
        ...state,
        data: state.data.filter(task => task.id !== action.payload),
      };
    },
    deleteTaskReject(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  toggleCompleted,
  toggleDelete,
  fetchTasksPending,
  fetchTasksSuccess,
  fetchTasksReject,
  addTaskPending,
  addTaskSuccess,
  addTaskReject,
  toggleTaskPending,
  toggleTaskSuccess,
  toggleTaskReject,
  deleteTaskPending,
  deleteTaskSuccess,
  deleteTaskReject,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
