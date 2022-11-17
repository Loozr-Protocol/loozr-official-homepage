import { createSlice } from '@reduxjs/toolkit';
import { getNotifications } from './actions';
import NotificationAlert from '../../config/constants/models/notifications';


export interface NotificationsState {
  notifications: NotificationAlert[];
  pagination: {
    total: number;
    current: number;
    prevPage: number;
    reachMaxLimit: boolean;
  };
  loading: boolean;
  success: boolean;
  error: string;
}

const initialState: NotificationsState = {
  notifications: [],
  pagination: {
    total: 0,
    current: 1,
    prevPage: 0,
    reachMaxLimit: false
  },
  loading: false,
  success: false,
  error: null
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    changePage(state, action) {
      state.pagination.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotifications.pending, (state) => {
      state.loading = true;
      state.success = false;
    });

    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      if (state.pagination.current === state.pagination.prevPage) return;

      const notifications: NotificationAlert[] = action.payload.results.map((res: any) => {
        const notification = new NotificationAlert({});
        notification.fromJson(res);
        return notification;
      })
      if (!notifications.length) {
        state.pagination.reachMaxLimit = true;
        return;
      }
      state.notifications = [...state.notifications, ...notifications];
      state.pagination.total = action.payload.pagination.to;
      state.pagination.prevPage = action.payload.pagination.current_page;
    });

    builder.addCase(getNotifications.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    });
  }
});

export const { changePage } = notificationsSlice.actions
export default notificationsSlice.reducer