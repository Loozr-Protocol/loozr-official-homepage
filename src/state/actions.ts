import { Song } from "../config/constants/types";

export const selectSong = (song: Song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const setPlayerState = (isPlaying: boolean) => {
  return {
    type: "PLAYER_STATE_SELECTED",
    payload: isPlaying,
  };
};

export const setVolume = (val: number) => {
  return {
    type: "SET_VOLUME",
    payload: val,
  };
};

export const setMute = (val: boolean) => {
  return {
    type: "SET_MUTE_STATE",
    payload: val,
  };
};

export const setDuration = (val: number) => {
  return {
    type: "SET_DURATION",
    payload: val,
  };
};

export const setCurrentLocation = (val: number) => {
  return {
    type: "SET_CURRENT_LOCATION",
    payload: val,
  };
};