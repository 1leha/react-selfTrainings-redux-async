import { createSelector } from '@reduxjs/toolkit';
import { filterStatus } from 'redux/constants';

export const sellectTasks = state => state.tasks.data;
export const sellectError = state => state.tasks.error;
export const sellectIsLoading = state => state.tasks.isLoading;

export const sellectFilterStatus = state => state.filters.status;

//
export const sellectFilteredTasks = createSelector(
  [sellectTasks, sellectFilterStatus],
  (tasks, filter) => {
    switch (filter) {
      case filterStatus.active:
        return tasks.filter(task => !task.completed);
      case filterStatus.completed:
        return tasks.filter(task => task.completed);

      default:
        return tasks;
    }
  }
);

export const sellectCoundedTask = createSelector([sellectTasks], tasks => {
  return tasks.reduce(
    (counter, task) => {
      if (task.completed) {
        counter.completed += 1;
      } else {
        counter.active += 1;
      }
      return counter;
    },
    { active: 0, completed: 0 }
  );
});
