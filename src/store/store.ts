import { configureStore } from '@reduxjs/toolkit';
import { swApi } from './api/swApi';

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(swApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
