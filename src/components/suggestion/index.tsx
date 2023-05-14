import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import TrackCard from "../Tracks/Track";
import { getTracks } from "../../state/track/actions";
import SlidesButton from "../SlidesButton";
import { resetTracks } from "../../state/track/trackReducer";

const Suggestion = () => {
  const ref: any = React.useRef(null);
  const dispatch = useDispatch();
  const tracks = useSelector((state: AppState) => state.tracks.data);

  useEffect(() => {
    dispatch(resetTracks());
    dispatch(getTracks({ nextCursor: "" }));
  }, [dispatch]);

  return (
    <div className="w-full mt-[2px] md:px-0 px-6 ">
      <div className="flex items-center justify-between pb-2">
        <p className="font-medium text-base md:text-[17px] text-white">
          Tracks you&apos;d love
        </p>
        <SlidesButton position={ref} width={200} />
      </div>
      <div
        ref={ref}
        className="max-w-full overflow-x-auto  overflow-y-hidden  scroll_event whitespace-nowrap pt-3 px-2 pb-[74px]"
      >
        <div className="flex">
          {tracks.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
