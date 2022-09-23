import { configureStore } from '@reduxjs/toolkit';
import songReducer from './song/songSlice';
import userReducer from './user/userReducer';
import artistReducer from './artist/artistReducer';

const store = configureStore({
  reducer: {
    song: songReducer,
    user: userReducer,
    artist: artistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof store.getState>;

export default store;