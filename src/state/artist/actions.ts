import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetArtistCallback, useGetArtistHodlersCallback, useGetArtistStatCallback, useGetHodlersBalanceCallback } from "./hooks";

export const getArtists = createAsyncThunk(
  'artist/getArtists',
  async (nextCursor: string = '', { rejectWithValue }) => {
    const { handleGetArtists } = useGetArtistCallback();
    try {
      const result = await handleGetArtists(nextCursor);
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

export const getHodlers = createAsyncThunk(
  'artist/getHodlers',
  async (id: number, { rejectWithValue }) => {
    const { handleGetHodlers } = useGetArtistHodlersCallback();
    try {
      const result = await handleGetHodlers(id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getHodlersBalance = createAsyncThunk(
  'artist/getHodlersBalance',
  async ({ id, accountId, userId }: { id: number, accountId: string, userId: number }, { rejectWithValue }) => {
    const { handleGetHodlerBalance } = useGetHodlersBalanceCallback();
    try {
      const result = await handleGetHodlerBalance(id, accountId);
      return [userId, result];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)