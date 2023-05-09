import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import {
  setIsPlaying,
  setCurrentTrackIndex,
  setQueue,
} from "../../state/track/trackReducer";
import { Track } from "../../types/Track";
import Play from "../../assets/svg/controls/play.svg";
import Pause from "../../assets/svg/controls/pause.svg";

interface TrackProps {
  track: Track;
}

const TrackCard = ({ track }: TrackProps) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: AppState) => state.tracks.data);
  const queue = useSelector((state: AppState) => state.tracks.queue);
  const isPlaying = useSelector((state: AppState) => state.tracks.isPlaying);
  const currentTrackIndex = useSelector(
    (state: AppState) => state.tracks.currentTrackIndex
  );
  const [isShown, setIsShown] = React.useState(null);

  const isCurrentlyPlaying = () => {
    if (isPlaying) {
      const trackIndex = queue.findIndex((v) => v.id === track.id);

      return trackIndex === currentTrackIndex;
    }
    return false;
  };

  const playTrack = () => {
    const trackIndex = tracks.findIndex((v) => v.id === track.id);
    dispatch(setQueue([...tracks]));
    dispatch(setCurrentTrackIndex({ trackIndex: trackIndex }));
    dispatch(setIsPlaying(true));
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="w-full relative"
    >
      <div
        className="absolute inset-0 z-10 cursor-pointer "
        onMouseEnter={() => {
          setIsShown(track.id);
        }}
        onMouseOut={() => {
          setIsShown(null);
        }}
      />
      <div className="relative">
        <img src={track.artwork} alt="" width={"100%"} height={203} />
        <div
          className={`absolute inset-y-[45%] inset-x-[43%] ${
            !isShown && "hidden"
          }`}
        >
          {isCurrentlyPlaying() ? (
            <button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              className=" w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center "
              onClick={() => dispatch(setIsPlaying(false))}
              onMouseEnter={() => {
                setIsShown(track.id);
              }}
              onMouseOut={() => {
                setIsShown(null);
              }}
            >
              <img src={Pause} alt="" className=" cursor-pointer w-4 h-5" />
            </button>
          ) : (
            <button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              className=" w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center "
              onClick={() => playTrack()}
              onMouseEnter={() => {
                setIsShown(track.id);
              }}
              onMouseOut={() => {
                setIsShown(null);
              }}
            >
              <img src={Play} alt="" className="cursor-pointer  w-4 h-6" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-3 w-full">
        <Marquee
          speed={50}
          loop={isShown === track.id ? 0 : -1}
          gradient={false}
        >
          <p className="mb-[3px] font-medium text-sm text-white">
            {track.songTitle + " "}
          </p>
        </Marquee>
      </div>
      <p className="text-muted text-xs font-normal">{track.artistName}</p>
    </motion.div>
  );
};

export default TrackCard;
