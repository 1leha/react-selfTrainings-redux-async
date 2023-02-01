import { initTasksState } from './initTasksState';

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initTasksState,
  reducers: {
    addTask: {
      reducer(state, action) {
        console.log('state :>> ', state);
        console.log('action :>> ', action);

        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { id: nanoid(), text, completed: false },
        };
      },
    },

    toggleCompleted(state, action) {
      return state.map(task => {
        if (task.id !== action.payload) return task;

        return { ...task, completed: !task.completed };
      });
    },

    toggleDelete(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleCompleted, toggleDelete } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
