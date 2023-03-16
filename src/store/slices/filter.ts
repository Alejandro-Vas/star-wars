import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  eyeColor: string;
}

const initialState = {
  eyeColor: 'All',
} as IFilters;

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<{type:string, value:string}>) {
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    },
  },
});

export default filterSlice;
export const filterActions = filterSlice.actions;
