import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../services/ApiService/ApiService";

export const getTracks = createAsyncThunk(
  'track/getTracks',
  async ({ nextCursor = '', artistToken = null }: { nextCursor: string, artistToken?: string }, { rejectWithValue }) => {
    let url = `/music/songs?cursor=${nextCursor}`;
    if (artistToken) {
      url = `/music/songs/${artistToken}?cursor=${nextCursor}`;
    }

    try {
      const result = await ApiService.get(url);
      return result;
    }catch(error) {
      return rejectWithValue(error);
    }
  }
)