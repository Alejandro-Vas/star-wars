import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITranslation {
  language: 'english' | 'wookiee'
}

const initialState = {
  language: 'english',
} as ITranslation;

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<ITranslation>) {
      return {
        ...state,
        language: action.payload.language,
      };
    },
  },
});

export default translationSlice;
export const translationActions = translationSlice.actions;
