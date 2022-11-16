import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetNotificationsCallback } from "../hooks";

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async (currentPage: number, { rejectWithValue }) => {
    const { handleNotifications } = useGetNotificationsCallback();
    try {
      const result = await handleNotifications(currentPage);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)