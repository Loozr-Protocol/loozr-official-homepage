import React, { useState } from "react";
import _ from 'lodash';
import { connect, useDispatch } from "react-redux";
import { setPlayerState, selectSong } from "../../state/actions";
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
    if (selectedSong == null || !_.isEqual(selectedSong, song)) {
      song.audio = audio;
      dispatch(selectSong(song));
    }
    isPlaying ? audio.pause() : audio.play();
    dispatch(setPlayerState(!isPlaying));
  };

  return (
    <span className="audio-wrapper">
      <span onClick={toggle} className="play-butn">
        <span className="icon">
          <img src={isPlaying ? PlayIcon : PauseIcon } alt="play" />
        </span>
      </span>
    </span>
  );
};

const mapStateToProps = (state: { playerState: any; selectedSong: any}) => {
  return {
    isPlaying: state.playerState,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSong })(
  PlayButton
);