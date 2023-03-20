import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  eyeColor: string;
}

const initialState = {
  eyeColor: 'All',
} as IFilters;

interface IFilterPayload {
  type:string,
  value:string
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<IFilterPayload>) {
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    },
  },
});

export default filterSlice;
export const filterActions = filterSlice.actions;
