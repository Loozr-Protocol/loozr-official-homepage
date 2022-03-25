import { combineReducers } from "redux";
import { Song } from "../config/constants/types";

const selectedSongReducer = (selectedSong=null, action: { type: string; payload: Song; }) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const playerStateReducer = (isPlaying = false, action: { type: string; payload: boolean; }) => {
  if (action.type === "PLAYER_STATE_SELECTED") {
    return action.payload;
  }
  return isPlaying;
};

const volumeReducer = (volume = 100, action: { type: string; payload: any; }) => {
  if (action.type === "SET_VOLUME") {
    return action.payload;
  }
  return volume;
};

const durationReducer = (duration = 0, action: { type: string; payload: number; }) => {
  if (action.type === "SET_DURATION") {
    return action.payload;
  }
  return duration;
};

const currentLocationReducer = (loc = 0, action: { type: string; payload: number; }) => {
  if (action.type === "SET_CURRENT_LOCATION") {
    return action.payload;
  }
  return loc;
};

const muteReducer = (muteState = false, action: { type: string; payload: boolean; }) => {
  if (action.type === "SET_MUTE_STATE") {
    return action.payload;
  }
  return muteState;
};

export default combineReducers({
  selectedSong: selectedSongReducer,
  playerState: playerStateReducer,
  volume: volumeReducer,
  duration: durationReducer,
  currentLocation: currentLocationReducer,
  mute: muteReducer,
});