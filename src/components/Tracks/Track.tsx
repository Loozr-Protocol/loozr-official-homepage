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
      onMouseOut={() => setIsShown(null)}
      onMouseOver={() => setIsShown(track.id)}
      className="flex flex-col h-auto mr-3 min-w-[100px] relative cursor-pointer"
    >
      <img
        src={track.artwork}
        alt=""
        className="object-cover h-36 w-h-36 mb-[15px]"
      />
      <div className=" w-full ">
        <Marquee
          speed={50}
          loop={isShown === track.id + "" ? 0 : -1}
          gradient={false}
        >
          <p className="mb-[3px] font-medium text-sm text-white">
            {track.songTitle}
          </p>
        </Marquee>
      </div>
      <p className="text-muted text-xs font-normal md:text-[13px] mt-[2px] md:font-normal">
        {track.artistName}
      </p>
      <div
        className={`absolute inset-y-[36%] inset-x-[38%] ${
          !isShown ? "hidden" : ""
        }`}
        style={{ zIndex: 1000 }}
      >
        {isCurrentlyPlaying() ? (
          <button
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            className=" w-[50px] h-[50px] relative rounded-full flex justify-center items-center "
            onClick={() => dispatch(setIsPlaying(false))}
          >
            <img src={Pause} alt="" className=" cursor-pointer w-4 h-5" />
          </button>
        ) : (
          <button
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            className=" w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center "
            onClick={() => playTrack()}
          >
            <img src={Play} alt="" className="cursor-pointer  w-4 h-6" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TrackCard;
