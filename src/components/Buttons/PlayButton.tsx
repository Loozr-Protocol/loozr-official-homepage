import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlayerState,
  selectSong,
  setDuration,
  setCurrentLocation,
  selectPlayerState,
  selectSelectedSong,
} from "../../state/song/songSlice";
import PlayControllerIcon from "../../assets/img/play.png";
import PauseControllerIcon from "../../assets/img/pause.png";
import { Song } from "../../config/constants/types";

interface PlayButtonProps {
  song: Song;
  altIcons?: boolean;
}

const PlayButton = ({ song, altIcons = false }: PlayButtonProps) => {
  let playIcon = PlayControllerIcon;
  let pauseIcon = PauseControllerIcon;

  const isPlaying = useSelector(selectPlayerState);
  const selectedSong = useSelector(selectSelectedSong);
  const dispatch = useDispatch();

  const [audio] = useState(new Audio(song.url));
  const [currentAudioPlaying, setCurrentAudioPlayingState] = useState(false);

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
      const newSongInstance = { ...song };
      newSongInstance.audio = audio;
      dispatch(selectSong(newSongInstance));
    }
    if (selectedSong && selectedSong.url === song.url) {
      currentlyPlaying ? selectedSong.audio.pause() : selectedSong.audio.play();
    } else {
      currentlyPlaying ? audio.pause() : audio.play();
    }
    dispatch(setPlayerState(!currentlyPlaying));
  };

  // if (altIcons) {
  //   playIcon = PlayControllerIconAlt;
  //   pauseIcon = PauseControllerIconAlt;
  // }

  useEffect(() => {
    if (selectedSong && selectedSong.url === song.url) {
      setCurrentAudioPlayingState(!isPlaying);
    } else {
      setCurrentAudioPlayingState(audio.paused);
    }
  }, [selectedSong, song.url, audio.paused, isPlaying]);

  return (
    <span className="audio-wrapper">
      <span onClick={toggle} className="play-butn">
        <span className="icon">
          <img src={currentAudioPlaying ? playIcon : pauseIcon} alt="play" />
        </span>
      </span>
    </span>
  );
};
export default PlayButton;
