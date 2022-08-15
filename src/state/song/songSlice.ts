import { createSlice } from '@reduxjs/toolkit';
import artistsData from "../../config/mock-data/artists.json";
import { Song } from "../../config/constants/types";

const artistsSong = () => {
  const songs: Song[] = [];
  artistsData.map((artist) => songs.push(...artist.songs));
  return songs;
}

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    songs: artistsSong(),
    mute: false,
    currentLocation: 0,
    duration: 0,
    volume: 100,
    playerState: false,
    selectedSong: null,
  },
  reducers: {
    selectSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setPlayerState: (state, action) => {
      state.playerState = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setMute: (state, action) => {
      state.mute = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  }
})

export const selectPlayerState = (state) => state.song.playerState
export const selectSongs = (state) => state.song.songs
export const selectMute = (state) => state.song.mute
export const selectCurrentLocation = (state) => state.song.currentLocation
export const selectDuration = (state) => state.song.duration
export const selectVolume = (state) => state.song.volume
export const selectSelectedSong = (state) => state.song.selectedSong

export const { selectSong, setPlayerState, setVolume, setMute, setDuration, setCurrentLocation } = songSlice.actions

export default songSlice.reducer