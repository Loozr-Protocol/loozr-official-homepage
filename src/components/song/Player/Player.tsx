import "./Player.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlayerState,
  setDuration,
  setCurrentLocation,
  setMute,
  setVolume,
  selectVolume,
  selectMute,
  selectCurrentLocation,
  selectDuration,
  selectSelectedSong,
  selectPlayerState,
} from "../../../state/song/songSlice";
import Time from "./Time";
import Progress from "./Progress";
import { Link } from "react-router-dom";

const Player = () => {
  const dispatch = useDispatch();
  const duration = useSelector(selectDuration);
  const selectedSong = useSelector(selectSelectedSong);
  const mute = useSelector(selectMute);
  const isPlaying = useSelector(selectPlayerState);
  const currentLocation = useSelector(selectCurrentLocation);
  const volume = useSelector(selectVolume);

  let timer: any;

  const toggle = () => {
    isPlaying
      ? selectedSong.audio?.pause()
      : selectedSong.audio?.play();
    dispatch(setPlayerState(!isPlaying));
  };

  const onVolumeChange = (event: { target: { value: any; }; }) => {
    dispatch(setVolume(event.target.value));
  }

  const inputStyle = (val: number) => {
    return { "--value": `${val}%` } as React.CSSProperties;
  };

  useEffect(() => {
    if (selectedSong) {
      if (selectedSong.audio) {
        selectedSong.audio.muted = mute;
        selectedSong.audio.volume = volume / 100;
      }
    }
  }, [mute, selectedSong, volume]);

  useEffect(() => {
    if (selectedSong) {
      if (selectedSong.audio) {
        let duration = selectedSong.audio?.duration;
        if (duration) {
          dispatch(setDuration(duration));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
          const currentTime = selectedSong.audio?.currentTime;
          if (currentTime) {
            dispatch(setCurrentLocation(currentTime));
          }
        }, 1000);
      }
    }
  }, [dispatch, selectedSong, timer]);

  useEffect(() => {
    if (selectedSong) {
      selectedSong.audio?.addEventListener("ended", () => {
        dispatch(setPlayerState(false));
      });
      selectedSong.audio?.removeEventListener("ended", () => {
        dispatch(setPlayerState(false));
      });
    }
  }, [dispatch, selectedSong, timer]);

  return (
    <>
      {selectedSong ? (
        <div className="plyrist plyrist-theme-2 plyrist_audio">
          <div className="plyr plyr--full-ui plyr--audio">
            <div className="plyr__controls">
              <Progress />
              <Link
                to={`/artists/songs/${selectedSong.id}`}
                className="plyr__poster"
                style={{
                  backgroundImage: `url('${selectedSong.photo}')`,
                }}
              ></Link>
              <div className="plyr__col plyr__info">
                <Link
                  className="plyr__title ajax"
                  to={`/artists/songs/${selectedSong.id}`}
                  data-pjax-state=""
                >
                  {selectedSong.name}
                </Link>
                <div className="plyr__author">{selectedSong.author}</div>
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
                      isPlaying ? "icon--not-pressed" : "icon--pressed"
                    }
                    role="presentation"
                  >
                    <use xlinkHref="/img/plyrist.svg#plyr-pause"></use>
                  </svg>
                  <svg
                    className={
                      !isPlaying ? "icon--not-pressed" : "icon--pressed"
                    }
                    role="presentation"
                  >
                    <use xlinkHref="/img/plyrist.svg#plyr-play"></use>
                  </svg>
                  <span
                    className={`${
                      !isPlaying ? "label--pressed" : "label--not-pressed"
                    } plyr__tooltip`}
                    role="tooltip"
                  >
                    Pause
                  </span>
                  <span
                    className={`${
                      isPlaying ? "label--pressed" : "label--not-pressed"
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
                <Time time={currentLocation} />
              </div>
              <div
                className="plyr__time plyr__time--duration"
                aria-label="Duration"
              >
                <Time time={duration} />
              </div>
              <button
                type="button"
                className="plyr__control"
                aria-pressed="false"
                aria-label="Mute"
                data-plyr="mute"
                onClick={() => dispatch(setMute(!mute))}
              >
                <svg
                  className={mute ? "icon--not-pressed" : "icon--pressed"}
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-muted"></use>
                </svg>
                <svg
                  className={
                    !mute ? "icon--not-pressed" : "icon--pressed"
                  }
                  role="presentation"
                >
                  <use xlinkHref="/img/plyrist.svg#plyr-volume"></use>
                </svg>
                <span
                  className={`${
                    !mute ? "label--pressed" : "label--not-pressed"
                  } plyr__tooltip`}
                  role="tooltip"
                >
                  Unmute
                </span>
                <span
                  className={`${
                    mute ? "label--pressed" : "label--not-pressed"
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
                  value={volume}
                  onChange={onVolumeChange}
                  autoComplete="off"
                  aria-label="Volume"
                  aria-valuenow={volume}
                  style={inputStyle(volume)}
                  seek-value={volume}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};


export default Player;
