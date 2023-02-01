// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './tasksSlice';
import { filtersReduser } from './reducer';

// const enhanser = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReduser,
  },
});
