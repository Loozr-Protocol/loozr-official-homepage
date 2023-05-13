import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import {
  setCurrentTime,
  setIsPlaying,
  setCurrentTrackIndex,
} from "../../state/track/trackReducer";
import MusicController from "./MusicController";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const queue = useSelector((state: AppState) => state.tracks.queue);
  const currentTrackIndex = useSelector(
    (state: AppState) => state.tracks.currentTrackIndex
  );
  const currentTime = useSelector(
    (state: AppState) => state.tracks.currentTime
  );
  const isPlaying = useSelector((state: AppState) => state.tracks.isPlaying);

  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    // if (audioPlayer) {
    //   audioPlayer.currentTime = currentTime;
    // }
  }, [audioPlayer, currentTime]);

  useEffect(() => {
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }, [audioPlayer, isPlaying]);

  useEffect(() => {
    if (queue.length > 0) {
      dispatch(
        setCurrentTrackIndex({
          trackIndex: currentTrackIndex === -1 ? 0 : currentTrackIndex,
        })
      );
      dispatch(setCurrentTime(0));
      dispatch(setIsPlaying(true));
    }
  }, [dispatch, queue]);

  useEffect(() => {
    if (currentTrackIndex !== -1) {
      if (audioPlayer) {
        audioPlayer.pause();
      }

      const audio = new Audio(queue[currentTrackIndex].songUrl);
      audio.addEventListener("ended", () => {
        dispatch(setIsPlaying(false));
        if (currentTrackIndex + 1 < queue.length) {
          dispatch(setCurrentTrackIndex({ trackIndex: currentTrackIndex + 1 }));
          setTimeout(() => {
            dispatch(setIsPlaying(true));
          }, 800);
        } else {
          dispatch(setCurrentTime(0));
        }
      });
      audio.addEventListener("timeupdate", () => {
        dispatch(setCurrentTime(audio.currentTime));
      });
      setAudioPlayer(audio);
    }
  }, [currentTrackIndex, dispatch, queue]);

  return (
    <>
      {currentTrackIndex !== -1 && (
        <div className="fixed md:top-auto !txt md:right-auto bottom-20 left-0 right-0 z-50 md:bottom-6 md:left-14 rounded-[13px]">
          <MusicController track={queue[currentTrackIndex]} />
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
