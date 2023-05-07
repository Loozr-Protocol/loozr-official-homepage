import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import User from "../../config/constants/models/user";
import Pagination from "../Pagination";
import TrackCard from "./Track";
import { getTracks } from "../../state/track/actions";
import { changePage } from "../../state/track/trackReducer";

const RenderTracks = (props) => {
  return (
    <div
      onScroll={props.onScroll}
      ref={props.listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {props.dataList.length === 0 ? (
        <div className=" w-full py-5 rounded-lg mb-32 bg-[#10141C] bg-opacity-50 md:backdrop:mb-12 ">
          <p className=" font-medium text-[13px] text-center ">
            No information available 👋
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5  gap-y-10">
          {props.dataList.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function UserTracks({ user }: { user: User }) {
  const dispatch = useDispatch();
  const tracks = useSelector((state: AppState) => state.tracks.data);
  const pagination = useSelector((state: AppState) => state.tracks.pagination);

  return (
    <Pagination
      reachMaxLimit={pagination.reachMaxLimit}
      dataList={tracks}
      onFetchData={() =>
        dispatch(
          getTracks({
            artistToken: user.tokenName,
            nextCursor: pagination.nextCursor,
          })
        )
      }
      currentCursor={pagination.currentCursor}
      nextCursor={pagination.nextCursor}
      onSetCurrentCursor={() => dispatch(changePage())}
    >
      <RenderTracks />
    </Pagination>
  );
}
