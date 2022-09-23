import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetArtistCallback } from "./hooks";

export const getArtists = createAsyncThunk(
  'user/getArtists',
  async (any, { rejectWithValue }) => {
    const { handleGetArtists } = useGetArtistCallback();
    try {
      const result = await handleGetArtists();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)