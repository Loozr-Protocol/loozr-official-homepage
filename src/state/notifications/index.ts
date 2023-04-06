import { createSlice } from '@reduxjs/toolkit';
import { getNotifications } from './actions';
import NotificationAlert from '../../config/constants/models/notifications';
import { Pagination } from '../../config/constants/types';


export interface NotificationsState {
  notifications: NotificationAlert[];
  pagination: Pagination;
  loading: boolean;
  success: boolean;
  error: string;
}

const initialState: NotificationsState = {
  notifications: [],
  pagination: {
    nextCursor: '',
    currentCursor: '',
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
    changePage(state) {
      if (!state.pagination.nextCursor)return;
      state.pagination.currentCursor = state.pagination.nextCursor;
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

      if (state.pagination.currentCursor !== state.pagination.nextCursor) return;

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
      state.pagination.nextCursor = action.payload.next_cursor;
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