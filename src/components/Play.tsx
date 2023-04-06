import React from "react";
import { PlayCircleFilled } from "@mui/icons-material";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleFilled />
    </button>
  );
}
