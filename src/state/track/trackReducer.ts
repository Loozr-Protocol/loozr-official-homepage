import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination } from '../../config/constants/types';
import { getTracks } from './actions';
import { Track } from '../../types/Track';
import { parseRawTrack } from '../../utils/parser';

export interface TrackState {
  currentTrackIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  data: Track[];
  queue: Track[];
  pagination: Pagination;
  tracksLoaded: boolean;
  loading: boolean;
  success: boolean;
  error: string;
}

const initialState: TrackState = {
  currentTrackIndex: -1,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  pagination: {
    nextCursor: '',
    currentCursor: '',
    reachMaxLimit: false
  },
  data: [],
  queue: [],
  tracksLoaded: false,
  loading: false,
  success: false,
  error: null
}

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    resetTracksList(state) {
      state.data = [];
      state.tracksLoaded = false;
      state.pagination = {
        nextCursor: '',
        currentCursor: '',
        reachMaxLimit: false
      };
    },
    changePage(state) {
      if (!state.pagination.nextCursor) return;
      state.pagination.currentCursor = state.pagination.nextCursor;
    },
    resetTracks(state) {
        state.data = [];
        state.pagination = {
          nextCursor: '',
          currentCursor: '',
          reachMaxLimit: false
        };
      state.tracksLoaded = false;
    },
    setCurrentTrackIndex: (state, action: PayloadAction<{ trackIndex: number }>) => {
      state.currentTrackIndex = action.payload.trackIndex;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setQueue: (state, action: PayloadAction<Track[]>) => {
      state.queue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTracks.pending, (state) => {
      state.loading = true;
      state.success = false;
    });

    builder.addCase(getTracks.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    });

    builder.addCase(getTracks.fulfilled, (state, action: any) => {
      if (state.pagination.currentCursor !== state.pagination.nextCursor) return;

      const tracks = action.payload.results.map((rawRes: any) => {
        const track = parseRawTrack(rawRes);
        return track;
      });

      if (!tracks.length) {
        state.pagination.reachMaxLimit = true;
        return;
      }

      state.data = [...state.data, ...tracks];
      state.pagination.nextCursor = action.payload.next_cursor;
      state.tracksLoaded = true;
    });
  }
});

export const {
  resetTracksList,
  changePage,
  setCurrentTrackIndex,
  setCurrentTime,
  setIsPlaying,
  setQueue,
  resetTracks,
} = trackSlice.actions
export default trackSlice.reducer