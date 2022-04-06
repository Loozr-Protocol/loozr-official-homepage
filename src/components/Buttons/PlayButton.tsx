import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  setPlayerState,
  selectSong,
  setDuration,
  setCurrentLocation,
} from "../../state/actions";
import PlayIcon from "../../assets/img/play.png";
import PauseIcon from "../../assets/img/play.png";
import { Song } from "../../config/constants/types";

interface PlayButtonProps {
  song: Song;
  selectedSong: Song;
  isPlaying: boolean;
}

const PlayButton = ({ song, selectedSong, isPlaying }: PlayButtonProps) => {
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(song.url));

  const toggle = () => {
    let currentlyPlaying = isPlaying;

    if (
      selectedSong == null ||
      (selectedSong && selectedSong.url !== song.url)
    ) {
      if (selectedSong && selectedSong.audio) {
        selectedSong.audio.pause();
        selectedSong.audio.currentTime = 0;
        dispatch(setDuration(0));
        dispatch(setPlayerState(false));
        currentlyPlaying = false;
        dispatch(setCurrentLocation(0));
      }
      song.audio = audio;
      dispatch(selectSong(song));
    }
    if (selectedSong && selectedSong.url === song.url) {
      currentlyPlaying ? selectedSong.audio.pause() : selectedSong.audio.play();
    } else {
      currentlyPlaying ? audio.pause() : audio.play();
    }
    dispatch(setPlayerState(!currentlyPlaying));
  };

  return (
    <span className="audio-wrapper">
      <span onClick={toggle} className="play-butn">
        <span className="icon">
          <img src={isPlaying ? PlayIcon : PauseIcon} alt="play" />
        </span>
      </span>
    </span>
  );
};

const mapStateToProps = (state: { playerState: any; selectedSong: any }) => {
  return {
    isPlaying: state.playerState,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSong })(
  PlayButton
);
