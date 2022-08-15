import { configureStore } from '@reduxjs/toolkit';
import songReducer from './song/songSlice';

const store = configureStore({
  reducer: {
    song: songReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof store.getState>;

export default store;