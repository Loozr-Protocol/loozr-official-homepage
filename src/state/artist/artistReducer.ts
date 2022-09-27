import { createSlice } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';
import Artist from '../../config/constants/models/artist';
import { priceInLoozr } from '../../utils/creatorCoinFormater';
import { formatBalanceUSD, formatNumber, getBalanceAmount } from '../../utils/formatBalance';
import { httpError } from '../../utils/httpHelper';
import { getArtists, getCoinPrice } from './actions';

export interface CoinInfo {
  coinPrice: number;
  priceUSD: string;
  coinHolders: number;
  marketCap: string;
  founderReward: number;
  totalSupply: BigNumber;
}

export interface ArtistState {
  artists: Artist[];
  artistInfo?: Artist;
  coinInfo: CoinInfo;
  loading: boolean;
  success: boolean;
  error: string;
}

const initialState: ArtistState = {
  artists: [],
  artistInfo: null,
  coinInfo: null,
  loading: false,
  success: false,
  error: null
}

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    resetCoinPrice(state) {
      state.coinInfo = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArtists.pending, (state) => {
      state.loading = true;
      state.success = false;
    });

    builder.addCase(getArtists.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.artists = action.payload.results.map((res: any) => {
        const artist = new Artist({});
        artist.fromJson(res);
        return artist;
      });
    });

    builder.addCase(getArtists.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      httpError(action.payload);
    });
    
    builder.addCase(getCoinPrice.pending, (state) => {
      state.coinInfo = null;
    });

    builder.addCase(getCoinPrice.fulfilled, (state, action) => {
      const totalSupply = getBalanceAmount(action.payload["total_supply"]);
      const coinHolders = Number(action.payload['holders'])
      const founderReward = Number(action.payload['founder_reward'])
      const piceInLzr = priceInLoozr(action.payload["total_supply"]);
      const priceInUSD = formatBalanceUSD(piceInLzr);
      const mCap = totalSupply.times(priceInUSD).toFixed()

      state.coinInfo = {
        coinPrice: piceInLzr,
        priceUSD: priceInUSD,
        coinHolders: coinHolders,
        founderReward,
        totalSupply,
        marketCap: formatNumber(Number(mCap)),
      };
    });

    builder.addCase(getCoinPrice.rejected, (state, action) => {
      state.coinInfo = null;
    });
  }
});

export const { resetCoinPrice } = artistSlice.actions
export default artistSlice.reducer