import { createSlice } from '@reduxjs/toolkit';
import Artist from '../../config/constants/models/artist';
import { httpError } from '../../utils/httpHelper';
import { getArtists } from './actions';

export interface ArtistState {
  artists: Artist[];
  artistInfo?: Artist;
  loading: boolean,
  success: boolean,
  error: string
}

const initialState: ArtistState = {
  artists: [],
  artistInfo: null,
  loading: false,
  success: false,
  error: null
}

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
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
  }
});

export default artistSlice.reducer