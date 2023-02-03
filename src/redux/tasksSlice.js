import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTasks,
  addTasksToServer,
  toggleTask,
  deleteTask,
} from './operations';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  //*------------------------------
  //*
  //* with createAsyncThunk
  //*
  //*------------------------------
  extraReducers: {
    // fetch tasks Reducers
    [fetchTasks.pending]: state => {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    },
    [fetchTasks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // add Tasks To Server Reducers
    [addTasksToServer.pending]: state => {
      state.isLoading = true;
    },
    [addTasksToServer.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(payload);
    },
    [addTasksToServer.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // add toggleCompleted Reducers
    [toggleTask.pending]: state => {
      state.isLoading = true;
    },
    [toggleTask.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const idx = state.data.findIndex(task => task.id === payload.id);
      state.data.splice(idx, 1, payload);
    },
    [toggleTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // add toggleCompleted Reducers
    [deleteTask.pending]: state => {
      state.isLoading = true;
    },
    [deleteTask.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const idx = state.data.findIndex(task => task.id === payload);
      state.data.splice(idx, 1);
    },
    [deleteTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
