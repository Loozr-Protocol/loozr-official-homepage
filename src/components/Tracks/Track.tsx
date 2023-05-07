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

interface TrackProps {
  track: Track;
}

const TrackCard = ({ track }: TrackProps) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: AppState) => state.tracks.data);
  const [isShown, setIsShown] = React.useState("");

  const Checking = (item: any, text: any, shown: any) => {
    if (text.length > 19) {
      setIsShown(item + "");
    } else {
      setIsShown("false");
    }
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
        onMouseOver={() => {
          Checking(track.id, track.songTitle, true);
        }}
        onMouseOut={() => {
          Checking(track.id, track.songTitle, false);
        }}
        onClick={() => playTrack()}
      />
      <div className="relative">
        <img src={track.artwork} alt="" width={"100%"} height={203} />
        {/* <div
                  onMouseOver={() => setShow(true)}
                  onMouseOut={() => setShow(false)}
                  className={`absolute inset-y-[45%] inset-x-[43%] ${
                    !show && "hidden"
                  }`}
                >
                  {playing ? (
                    <Pause handleClick={() => setPlaying(false)} />
                  ) : (
                    <Play handleClick={() => setPlaying(true)} />
                  )}
                </div> */}
      </div>
      <div className="mt-3 w-full">
        <Marquee
          speed={50}
          loop={isShown === track.id + "" ? 0 : -1}
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
