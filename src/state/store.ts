import { configureStore } from '@reduxjs/toolkit';
import songReducer from './song/songSlice';
import userReducer from './user/userReducer';
import trackReducer from './track/trackReducer';
import artistReducer from './artist/artistReducer';
import miscReducer from './misc/index';
import notificationsReducer from './notifications/index';
import coinsStatReducer from './coinStat/index';
import sendLzr from './sendLoozr/sendLzr';

const store = configureStore({
  reducer: {
    sendlzr: sendLzr,
    coinsStat: coinsStatReducer,
    song: songReducer,
    user: userReducer,
    tracks: trackReducer,
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