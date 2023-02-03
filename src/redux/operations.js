import { useEffect } from 'react';

import axios from 'axios';
import { nanoid } from 'nanoid';
import {
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
} from './tasksSlice.js';

axios.defaults.baseURL = 'http://localhost:4040';

// fetchTasks operation
export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchTasksPending());
    const tasks = await axios.get('/tasks');

    dispatch(fetchTasksSuccess(tasks.data));
  } catch (error) {
    dispatch(fetchTasksReject(error));
  }
};

// addTasksToServer operation
export const addTasksToServer = text => async dispatch => {
  try {
    dispatch(addTaskPending());
    const tasks = await axios.post('/tasks', {
      id: nanoid(),
      text,
      completed: false,
    });

    dispatch(addTaskSuccess(tasks.data));
  } catch (error) {
    console.log('error :>> ', error);
    dispatch(addTaskReject(error));
  }
};

// toggleTask operation
export const toggleTask = (id, completed) => async dispatch => {
  try {
    dispatch(toggleTaskPending());

    dispatch(toggleTaskSuccess(id));

    const task = await axios.patch(`/tasks/${id}`, {
      completed: !completed,
    });
  } catch (error) {
    console.log('error :>> ', error);
    dispatch(toggleTaskReject(error));
  }
};

// deleteTask operation
export const deleteTask = id => async dispatch => {
  try {
    dispatch(deleteTaskPending());

    dispatch(deleteTaskSuccess(id));

    const deletedTask = await axios.delete(`/tasks/${id}`);
  } catch (error) {
    console.log('error :>> ', error);
    dispatch(deleteTaskReject(error));
  }
};
