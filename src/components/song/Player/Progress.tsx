import { useSelector, useDispatch } from "react-redux";
import { setCurrentLocation, selectDuration, selectCurrentLocation, selectSelectedSong } from "../../../state/song/songSlice";

function Progress() {
  const dispatch = useDispatch();
  const duration = useSelector(selectDuration);
  const currentLocation = useSelector(selectCurrentLocation);
  const selectedSong = useSelector(selectSelectedSong);

  const toPercent = () =>
    ((duration - currentLocation) / duration) * 100;

  const currentPosition = duration > 0 ? 100 - toPercent() : 0;

  const inputStyle = (val: number) => {
    return { "--value": `${val}%` } as React.CSSProperties;
  };

  const seekUpdate = (event: { target: { value: any } }) => {
    if (selectedSong.audio) {
      const newPosition = (event.target.value / 100) * duration;
      selectedSong.audio.currentTime = newPosition;
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
          seek-value={currentPosition}
        />
        <progress className="plyr__progress__buffer" max="100" value="100">
          % buffered
        </progress>
      </div>
    </>
  );
}

export default Progress;
