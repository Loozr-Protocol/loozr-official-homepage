import { connect, useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../state/actions";
import { Song } from "../../../config/constants/types";

interface ProgressProps {
  duration: number;
  currentLocation: number;
  selectedSong: Song;
}

function Progress(props: ProgressProps) {
  const dispatch = useDispatch();

  const toPercent = () =>
    ((props.duration - props.currentLocation) / props.duration) * 100;

  const currentPosition = props.duration > 0 ? 100 - toPercent() : 0;

  const inputStyle = (val: number) => {
    return { "--value": `${val}%` } as React.CSSProperties;
  };

  const seekUpdate = (event: { target: { value: any } }) => {
    if (props.selectedSong.audio) {
      const newPosition = (event.target.value / 100) * props.duration;
      props.selectedSong.audio.currentTime = newPosition;
      dispatch(setCurrentLocation(newPosition));
    }
  };

  return (
    <>
      <div className="plyr__progress">
        <input
          data-plyr="seek"
          type="range"
          min="0"
          max="100"
          step="0.001"
          onChange={seekUpdate}
          value={currentPosition}
          aria-label="Seek"
          aria-valuenow={currentPosition}
          style={inputStyle(currentPosition)}
          seek-value="currentPosition"
        />
        <progress className="plyr__progress__buffer" max="100" value="100">
          % buffered
        </progress>
        <span
          role="tooltip"
          className="plyr__tooltip"
          style={{ left: "83.139%" }}
        >
          00:24
        </span>
      </div>
    </>
  );
}

const mapStateToProps = (state: {
  selectedSong: Song;
  duration: number;
  currentLocation: number;
}) => {
  return {
    selectedSong: state.selectedSong,
    duration: state.duration,
    currentLocation: state.currentLocation,
  };
};
export default connect(mapStateToProps, {})(Progress);
