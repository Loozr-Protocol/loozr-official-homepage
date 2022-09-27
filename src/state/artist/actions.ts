import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetArtistCallback, useGetArtistStatCallback } from "./hooks";

export const getArtists = createAsyncThunk(
  'artist/getArtists',
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

export const getCoinPrice = createAsyncThunk('artist/getCoinPrice', async (id: number, { rejectWithValue }) => {
  try {
    const { handleGetStat } = useGetArtistStatCallback();
    const result = await handleGetStat(id);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});