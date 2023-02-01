// import { combineReducers } from 'redux';
import { filterStatus } from './constants';

const initFiltersState = { status: filterStatus.all };

// export const tasksReduser = (state = initTasksState, { type, payload }) => {
//   switch (type) {
//     case 'task/addTask':
//       return [...state, payload];

//     case 'task/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     case 'task/toggleDelete':
//       return state.filter(task => task.id !== payload);

//     default:
//       return state;
//   }
// };

export const filtersReduser = (state = initFiltersState, { type, payload }) => {
  switch (type) {
    case 'filter/changeFilter':
      return { ...state, status: payload };

    default:
      return state;
  }
};

// export const rootReduser = combineReducers({
//   tasks: tasksReduser,
//   filters: filtersReduser,
// });
