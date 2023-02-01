import { nanoid } from 'nanoid';

export const changeFilter = filterStatus => {
  return {
    type: 'filter/changeFilter',
    payload: filterStatus,
  };
};

export const addTask = text => {
  return {
    type: 'task/addTask',
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

export const toggleCompleted = taskID => {
  return {
    type: 'task/toggleCompleted',
    payload: taskID,
  };
};

export const toggleDelete = taskID => {
  return {
    type: 'task/toggleDelete',
    payload: taskID,
  };
};
