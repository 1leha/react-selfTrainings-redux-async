import { initFiltersState } from './initFiltersState';
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: initFiltersState,
  reducers: {
    changeFilter(state, action) {
      return { ...state, status: action.payload };
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
