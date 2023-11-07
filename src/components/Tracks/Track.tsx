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
import VerifiedBadge from "../../assets/icons/verified.svg";

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
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="flex flex-col h-auto mr-3 min-w-[180px] relative cursor-pointer"
    >
      <img
        src={track.artwork}
        alt=""
        className="object-cover h-48 w-h-48 mb-[10px]"
      />
      <div className="w-full">
        <Marquee
          speed={50}
          loop={isShown ? 0 : -1}
          gradient={false}
        >
          <p className="mb-[3px] font-medium text-sm text-white">
            {track.songTitle}
          </p>
        </Marquee>
      </div>
      <p className="flex items-center gap-[4px] text-muted text-xs font-normal md:text-[16px] mt-[2px] md:font-normal">
        {track.artistName}
        <img src={VerifiedBadge} alt="" className="w-5 h-5" />
      </p>
      {isShown && (
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isCurrentlyPlaying() ? (
            <button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              className="w-[50px] h-[50px] relative rounded-full flex justify-center items-center"
              onClick={() => dispatch(setIsPlaying(false))}
            >
              <img src={Pause} alt="" className="cursor-pointer w-4 h-5" />
            </button>
          ) : (
            <button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
              className="w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center"
              onClick={() => playTrack()}
            >
              <img src={Play} alt="" className="cursor-pointer  w-4 h-6" />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TrackCard;
