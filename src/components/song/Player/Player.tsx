import "./Player.css";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  setPlayerState,
  setDuration,
  setCurrentLocation,
  setMute,
  setVolume,
} from "../../../state/actions";
import Time from "./Time";
import Progress from "./Progress";
import { Song } from "../../../config/constants/types";
import { Link } from "react-router-dom";

interface PlayerProps {
  selectedSong: Song;
  isPlaying: any;
  volume: number;
  duration: number;
  currentLocation: number;
  mute: boolean;
  song: Song[];
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

  const onVolumeChange = (event: { target: { value: any; }; }) => {
    dispatch(setVolume(event.target.value));
  }

  const inputStyle = (val: number) => {
    return { "--value": `${val}%` } as React.CSSProperties;
  };

  useEffect(() => {
    if (props.selectedSong) {
      if (props.selectedSong.audio) {
        props.selectedSong.audio.muted = props.mute;
        props.selectedSong.audio.volume = props.volume / 100;
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
              <Link
                to={`/artists/songs/${props.selectedSong.id}`}
                className="plyr__poster"
                style={{
                  backgroundImage: `url('${props.selectedSong.photo}')`,
                }}
              ></Link>
              <div className="plyr__col plyr__info">
                <Link
                  className="plyr__title ajax"
                  to={`/artists/songs/${props.selectedSong.id}`}
                  data-pjax-state=""
                >
                  {props.selectedSong.name}
                </Link>
                <div className="plyr__author">{props.selectedSong.author}</div>
              </div>

              <div className="plyr__row">
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
                <button
                  type="button"
                  className="plyr__control"
                  data-plyr="prev"
                >
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
                <button
                  type="button"
                  className="plyr__control"
                  data-plyr="next"
                >
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
              </div>
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
                <input
                  data-plyr="volume"
                  type="range"
                  min="0"
                  max="100"
                  step="0.05"
                  value={props.volume}
                  onChange={onVolumeChange}
                  autoComplete="off"
                  aria-label="Volume"
                  aria-valuenow={props.volume}
                  style={inputStyle(props.volume)}
                  seek-value={props.volume}
                />
              </div>
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
  volume: number;
  mute: boolean;
  songs: Song[];
}) => {
  return {
    selectedSong: state.selectedSong,
    isPlaying: state.playerState,
    duration: state.duration,
    currentLocation: state.currentLocation,
    volume: state.volume,
    mute: state.mute,
    song: state.songs,
  };
};

export default connect(mapStateToProps, {})(Player);
