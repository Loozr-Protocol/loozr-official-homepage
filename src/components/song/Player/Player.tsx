import "./Player.css";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  setPlayerState,
  setDuration,
  setCurrentLocation,
  setMute,
} from "../../../state/actions";
import Time from "./Time";
import Progress from "./Progress";
import { Song } from "../../../config/constants/types";

interface PlayerProps {
  selectedSong: Song;
  isPlaying: any;
  volume: any;
  duration: number;
  currentLocation: number;
  mute: boolean;
}

const Player = (props: PlayerProps) => {
  const dispatch = useDispatch();
  let timer: any;

  const toggle = () => {
    props.isPlaying
      ? props.selectedSong.audio?.pause()
      : props.selectedSong.audio?.play();
    dispatch(setPlayerState(!props.isPlaying));
  };

  useEffect(() => {
    if (props.selectedSong) {
      if (props.selectedSong.audio) {
        props.selectedSong.audio.muted = props.mute;
        props.selectedSong.audio.volume = props.volume / 500;
      }
    }
  }, [props.mute, props.selectedSong, props.volume]);

  useEffect(() => {
    if (props.selectedSong) {
      if (props.selectedSong.audio) {
        let duration = props.selectedSong.audio?.duration;
        if (duration) {
          dispatch(setDuration(duration));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
          const currentTime = props.selectedSong.audio?.currentTime;
          if (currentTime) {
            dispatch(setCurrentLocation(currentTime));
          }
        }, 1000);
      }
    }
  }, [dispatch, props.selectedSong, timer]);

  useEffect(() => {
    if (props.selectedSong) {
      props.selectedSong.audio?.addEventListener("ended", () => {
        dispatch(setPlayerState(false));
      });
      props.selectedSong.audio?.removeEventListener("ended", () => {
        dispatch(setPlayerState(false));
      });
    }
  }, [dispatch, props.selectedSong, timer]);

  return (
    <>
      {props.selectedSong ? (
        <div className="plyrist plyrist-theme-2 plyrist_audio">
          <div className="plyr plyr--full-ui plyr--audio">
            <div className="plyr__controls">
              <Progress />
              <div
                className="plyr__poster"
                style={{
                  backgroundImage: `url('${props.selectedSong.photo}')`,
                }}
              ></div>
              <div className="plyr__col plyr__info">
                <a
                  className="plyr__title ajax"
                  href="item.detail.html#440557235"
                  data-pjax-state=""
                >
                  {props.selectedSong.name}
                </a>
                <div className="plyr__author">{props.selectedSong.author}</div>
              </div>
              <button
                type="button"
                className="plyr__control"
                data-plyr="repeat"
              >
                <svg role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-repeat"></use>
                </svg>
                <span className="plyr__tooltip" role="tooltip">
                  Repeat
                </span>
              </button>
              <button type="button" className="plyr__control" data-plyr="prev">
                <svg role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-prev"></use>
                </svg>
                <span className="plyr__tooltip" role="tooltip">
                  Prev
                </span>
              </button>
              <button
                type="button"
                onClick={toggle}
                className="plyr__control"
                aria-pressed="false"
                aria-label="Play"
                data-plyr="play"
              >
                <svg
                  className={
                    props.isPlaying ? "icon--not-pressed" : "icon--pressed"
                  }
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-pause"></use>
                </svg>
                <svg
                  className={
                    !props.isPlaying ? "icon--not-pressed" : "icon--pressed"
                  }
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-play"></use>
                </svg>
                <span
                  className={`${
                    !props.isPlaying ? "label--pressed" : "label--not-pressed"
                  } plyr__tooltip`}
                  role="tooltip"
                >
                  Pause
                </span>
                <span
                  className={`${
                    props.isPlaying ? "label--pressed" : "label--not-pressed"
                  } plyr__tooltip`}
                  role="tooltip"
                >
                  Play
                </span>
              </button>
              <button type="button" className="plyr__control" data-plyr="next">
                <svg role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-next"></use>
                </svg>
                <span className="plyr__tooltip" role="tooltip">
                  Next
                </span>
              </button>
              <button
                type="button"
                className="plyr__control"
                data-plyr="shuffle"
              >
                <svg role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-shuffle"></use>
                </svg>
                <span className="plyr__tooltip" role="tooltip">
                  Shuffle
                </span>
              </button>
              <button
                type="button"
                className="plyr__control"
                aria-pressed="false"
                data-plyr="like"
              >
                <svg className="icon--pressed" role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-liked"></use>
                </svg>
                <svg className="icon--not-pressed" role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-like"></use>
                </svg>
                <span className="label--pressed plyr__tooltip" role="tooltip">
                  Dislike
                </span>
                <span
                  className="label--not-pressed plyr__tooltip"
                  role="tooltip"
                >
                  Like
                </span>
              </button>
              <div className="plyr__row"></div>
              <div
                className="plyr__time plyr__time--current"
                aria-label="Current time"
              >
                <Time time={props.currentLocation} />
              </div>
              <div
                className="plyr__time plyr__time--duration"
                aria-label="Duration"
              >
                <Time time={props.duration} />
              </div>
              <button
                type="button"
                className="plyr__control"
                aria-pressed="false"
                aria-label="Mute"
                data-plyr="mute"
                onClick={() => dispatch(setMute(!props.mute))}
              >
                <svg
                  className={props.mute ? "icon--not-pressed" : "icon--pressed"}
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-muted"></use>
                </svg>
                <svg
                  className={
                    !props.mute ? "icon--not-pressed" : "icon--pressed"
                  }
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-volume"></use>
                </svg>
                <span
                  className={`${
                    !props.mute ? "label--pressed" : "label--not-pressed"
                  } plyr__tooltip`}
                  role="tooltip"
                >
                  Unmute
                </span>
                <span
                  className={`${
                    props.mute ? "label--pressed" : "label--not-pressed"
                  } plyr__tooltip`}
                  role="tooltip"
                >
                  Mute
                </span>
              </button>
              <div className="plyr__volume">
                {/* <input
                  data-plyr="volume"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value="1"
                  autoComplete="off"
                  aria-label="Volume"
                  aria-valuenow={0.8}
                /> */}
              </div>
              <button type="button" className="plyr__control" data-plyr="list">
                <svg role="presentation">
                  <use xlinkHref="/img/plyrist.svg#plyr-list"></use>
                </svg>
                <span className="plyr__tooltip" role="tooltip">
                  Playlist
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: {
  selectedSong: Song;
  playerState: boolean;
  duration: number;
  currentLocation: number;
  volume: any;
  mute: boolean;
}) => {
  return {
    selectedSong: state.selectedSong,
    isPlaying: state.playerState,
    duration: state.duration,
    currentLocation: state.currentLocation,
    volume: state.volume,
    mute: state.mute,
  };
};

export default connect(mapStateToProps, {})(Player);
