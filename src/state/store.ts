import { configureStore } from '@reduxjs/toolkit';
import songReducer from './song/songSlice';
import userReducer from './user/userReducer';
import artistReducer from './artist/artistReducer';
import miscReducer from './misc/index';
import notificationsReducer from './notifications/index';

const store = configureStore({
  reducer: {
    song: songReducer,
    user: userReducer,
    artist: artistReducer,
    notifications: notificationsReducer,
    misc: miscReducer
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