import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMultipleCoinStat } from "../../utils/calls/getArtistCoinState";
import { useCoinsBoughtCallback } from "../artist/hooks";

export const getCoinsBought = createAsyncThunk(
  'coinStat/getCoinsBought',
  async ({id, nextCursor = ''}: {id: number; nextCursor: string}, { rejectWithValue }) => {
    const { getCoinsBought } = useCoinsBoughtCallback();
    try {
      const result = await getCoinsBought(id, nextCursor);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const loadCoinsBoughtInfo = createAsyncThunk(
  'coinStat/loadCoinsBoughtInfo',
  async (coinIds: string, { rejectWithValue }) => {
    try {
      const result = await getMultipleCoinStat(coinIds);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
)