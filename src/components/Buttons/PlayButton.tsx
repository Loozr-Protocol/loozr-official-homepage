import React, { useEffect, useState } from "react";
import PlayIcon from "../../assets/img/play.png";
import PauseIcon from "../../assets/img/play.png";
import { Song } from "../../config/constants/types";

interface PlayButtonProps {
  song: Song;
}

const PlayButton = ({ song }: PlayButtonProps) => {
  const [audio] = useState(new Audio(song.url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return (
    <span className="audio-wrapper">
      <span onClick={toggle} className="play-butn">
        <span className="icon">
          <img src={playing ? PauseIcon : PlayIcon} alt="play" />
        </span>
      </span>
    </span>
  );
};

export default PlayButton;
