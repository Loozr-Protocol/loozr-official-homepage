import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetNotificationsCallback } from "../hooks";

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async (nextCursor: string = '', { rejectWithValue }) => {
    const { handleNotifications } = useGetNotificationsCallback();
    try {
      const result = await handleNotifications(nextCursor);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)