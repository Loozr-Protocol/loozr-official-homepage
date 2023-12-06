import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import {
  setIsPlaying,
  setCurrentTrackIndex
} from "../../state/track/trackReducer";
import Forward from "../../assets/svg/controls/forward.svg";
import Rewind from "../../assets/svg/controls/rewind.svg";
import Play from "../../assets/svg/controls/play.svg";
import Pause from "../../assets/svg/controls/pause.svg";
import { Track } from "../../types/Track";


interface MusicControllerProps {
  track: Track;
}

const MusicController = ({track}: MusicControllerProps) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: AppState) => state.tracks.isPlaying);
  const currentTrackIndex = useSelector(
    (state: AppState) => state.tracks.currentTrackIndex
  );
  const queue = useSelector((state: AppState) => state.tracks.queue);

  const handlePlayNext = () => {
    if(queue.length > currentTrackIndex + 1) {
      dispatch(setCurrentTrackIndex({trackIndex: currentTrackIndex + 1}));
      dispatch(setIsPlaying(true));
    }
  }

  const handlePlayPrev = () => {
    if(currentTrackIndex > 0) {
      dispatch(setCurrentTrackIndex({trackIndex: currentTrackIndex -1}));
      dispatch(setIsPlaying(true));
    }
  }

  return (
    <>
      <div
        className="flex w-full md:w-auto md:h-auto h-[70px] md:rounded-[13px] md:py-0 items-center "
        style={{ 
          background: "rgba(20, 25, 34, 0.65)",
          backdropFilter: "blur(12.5px)",
        }}
      >
        <div className=" w-12 md:w-14 md:ml-0 ml-3 ">
          <img
            src={track.artwork}
            alt=""
            className=" rounded-full md:rounded-r-none md:rounded-l-[13px] w-full"
          />
        </div>
        <div
          className="py-2 px-3 bg-transparent md:w-auto w-full md:rounded-r-[13px] flex items-center"
          style={
            {
              // backdropFilter: "blur(12.5px)",
            }
          }
        >
          <div className=" flex flex-1 md:flex-row flex-col pr-3 md:pr-0 md:items-center ">
            <button onClick={() => {}} className=" w-fit ">
              <p className="txt mb-px font-medium text-xs md:text-[13px] leading-5 text-white">
                {track.songTitle}
              </p>
              <p className="txt text-muted text-[10px] md:mt-0 -mt-1 md:text-xs font-normal md:font-normal">
                {track.artistName}
              </p>
            </button>
            <div className=" md:flex hidden ">
              <div className=" bg-slate-400 ml-6 mr-8 min-w-[180px] h-[2px] rounded-lg " />
            </div>
            <div className=" md:hidden flex ">
              <div className=" bg-slate-400 md:hidden mt-2 w-full rounded-lg " />
            </div>
            <div></div>
          </div>
          <div className="flex items-center mr-3">
            <img
              src={Rewind}
              alt=""
              className="cursor-pointer w-4 h-4"
              onClick={() => handlePlayPrev()}
            />
            {isPlaying ? (
              <img
                src={Pause}
                alt=""
                onClick={() => dispatch(setIsPlaying(false))}
                className="mx-6 cursor-pointer w-5 h-6"
              />
            ) : (
              <img
                src={Play}
                alt=""
                onClick={() => dispatch(setIsPlaying(true))}
                className="mx-6 cursor-pointer w-5 h-7"
              />
            )}
            <img
              src={Forward}
              alt=""
              onClick={() => handlePlayNext()}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicController;
