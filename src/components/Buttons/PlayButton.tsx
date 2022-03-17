import React, { useEffect, useState } from "react";
import PlayIcon from "../../assets/img/play.png";
import PauseIcon from "../../assets/img/play.png";

const PlayButton = (url: string) => {
  const [audio] = useState(new Audio(url));
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
    <span className="play-butn" onClick={toggle}>
      <span className="d-flex justify-content-center align-items-center icon">
        <img src={playing ? PauseIcon : PlayIcon} alt="play button" />
      </span>
    </span>
  );
};

export default PlayButton;
