import { createSlice } from '@reduxjs/toolkit';
import Artist, { CoinInfo } from '../../config/constants/models/artist';
import User from '../../config/constants/models/user';
import { jsonToUser } from '../../utils';
import { priceInLoozr } from '../../utils/creatorCoinFormater';
import { formatBalanceUSD, formatNumber, getBalanceAmount, getFullDisplayBalance } from '../../utils/formatBalance';
import { httpError } from '../../utils/httpHelper';
import { getArtists, getCoinPrice, getHodlers } from './actions';

interface Hodler {
  user: User;
  balance?: {
    balance: string;
    balanceUSD: string;
  }
}

export interface ArtistState {
  artists: Artist[];
  pagination: {
    total: number;
    current: number;
    prevPage: number;
    reachMaxLimit: boolean;
  };
  artistInfo?: Artist;
  coinInfo: CoinInfo;
  holders: Hodler[];
  holderLoaded: boolean;
  loading: boolean;
  success: boolean;
  error: string;
}

const initialState: ArtistState = {
  artists: [],
  pagination: {
    total: 0,
    current: 1,
    prevPage: 0,
    reachMaxLimit: false
  },
  artistInfo: null,
  coinInfo: null,
  holders: [],
  holderLoaded: false,
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
    },
    resetHoldersList(state) {
      state.holders = [];
      state.holderLoaded = false;
    },
    setArtistCoinInfo(state, action: { payload: {artist: Artist, rawCoinInfo: any} }) {
      const artist = action.payload.artist;

      const totalSupply = getBalanceAmount(action.payload.rawCoinInfo["total_supply"]);
      const coinHolders = Number(action.payload.rawCoinInfo['holders'])
      const founderReward = Number(action.payload.rawCoinInfo['founder_reward'])
      const piceInLzr = priceInLoozr(action.payload.rawCoinInfo["total_supply"]);
      const priceInUSD = formatBalanceUSD(piceInLzr);
      const mCap = totalSupply.times(priceInUSD).toFixed()

      const coinInfo: CoinInfo = {
        coinPrice: piceInLzr,
        priceUSD: priceInUSD,
        coinHolders: coinHolders,
        founderReward,
        totalSupply,
        marketCap: formatNumber(Number(mCap)),
      };
      state.artists.find(a => a.id === artist.id).setCoinInfo = coinInfo;
    },
    changePage(state, action) {
      state.pagination.current = action.payload;
    },
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

      if (state.pagination.current === state.pagination.prevPage) return;

      const artists = action.payload.results.map((res: any) => {
        const artist = new Artist({});
        artist.fromJson(res);
        return artist;
      });

      if (!artists.length) {
        state.pagination.reachMaxLimit = true;
        return;
      }

      state.artists = [...state.artists, ...artists];
      state.pagination.total = action.payload.pagination.to;
      state.pagination.prevPage = action.payload.pagination.current_page;
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

    builder.addCase(getHodlers.pending, (state) => {
      state.holders = [];
      state.holderLoaded = false;
    });

    builder.addCase(getHodlers.fulfilled, (state, action) => {
      state.holders = action.payload.results.map((res: any) => {
        const user = jsonToUser(res['user']);

        const piceInLzr = getFullDisplayBalance(res.balance);
        let priceInUSD = '0';

        if (state.coinInfo) {
          priceInUSD = formatNumber(Number(piceInLzr) * Number(state.coinInfo.priceUSD), 2, 6);
        }
        return {
          user, balance: {
            balance: formatNumber(Number(piceInLzr), 2, 6),
            balanceUSD: priceInUSD,
          } };
      });
      state.holderLoaded = true;
    });

    builder.addCase(getHodlers.rejected, (state, action) => {
      state.holders = [];
      state.holderLoaded = false;
    });
  }
});

export const { resetCoinPrice, resetHoldersList, setArtistCoinInfo, changePage } = artistSlice.actions
export default artistSlice.reducer