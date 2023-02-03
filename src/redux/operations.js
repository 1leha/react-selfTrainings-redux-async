import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

//*------------------------------
//*
//* with createAsyncThunk
//*
//*------------------------------

axios.defaults.baseURL = 'http://localhost:4040';

// fetchTasks operation
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (_, { rejectWithValue }) => {
    try {
      const tasks = await axios.get('/tasks');
      return tasks.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// addTasksToServer operation
export const addTasksToServer = createAsyncThunk(
  'tasks/addTasksToServer',
  async (text, { rejectWithValue }) => {
    try {
      const tasks = await axios.post('/tasks', {
        id: nanoid(),
        text,
        completed: false,
      });
      return tasks.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// toggleTask operation
export const toggleTask = createAsyncThunk(
  'tasks/toggleTask',
  async ({ id, completed }, { rejectWithValue }) => {
    try {
      const task = await axios.patch(`/tasks/${id}`, {
        completed: !completed,
      });
      return task.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const deletedTask = await axios.delete(`/tasks/${id}`);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
