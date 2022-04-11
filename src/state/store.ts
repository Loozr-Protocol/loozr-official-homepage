import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import artistsData from "../config/mock-data/artists.json";
import { Song } from "../config/constants/types";


const artistsSong = () => {
  const songs: Song[] = [];
  artistsData.map((artist) => songs.push(...artist.songs));
  return songs;
}

const initialData = {
  songs: artistsSong(),
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialData,
  applyMiddleware(...middlewares)
);

export default store;