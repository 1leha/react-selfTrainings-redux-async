import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTasks,
  addTasksToServer,
  toggleTask,
  deleteTask,
} from './operations';

const handlerPending = state => {
  state.isLoading = true;
};

const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

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
  extraReducers: builder => {
    builder
      // fetch tasks Reducers
      .addCase(fetchTasks.pending, handlerPending)
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload;
      })
      .addCase(fetchTasks.rejected, handlerRejected)

      // add Tasks To Server Reducers
      .addCase(addTasksToServer.pending, handlerPending)
      .addCase(addTasksToServer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data.push(payload);
      })
      .addCase(addTasksToServer.rejected, handlerRejected)

      // add toggleCompleted Reducers
      .addCase(toggleTask.pending, handlerPending)
      .addCase(toggleTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.data.findIndex(task => task.id === payload.id);
        state.data.splice(idx, 1, payload);
      })
      .addCase(toggleTask.rejected)

      // add toggleCompleted Reducers
      .addCase(deleteTask.pending, handlerPending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.data.findIndex(task => task.id === payload);
        state.data.splice(idx, 1);
      })
      .addCase(deleteTask.rejected, handlerRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
