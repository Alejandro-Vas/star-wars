import { configureStore } from '@reduxjs/toolkit';
import { swApi } from './api/swApi';
import filterSlice from './slices/filter';
import translationSlice from './slices/translation';

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
    filter: filterSlice.reducer,
    translation: translationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(swApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
