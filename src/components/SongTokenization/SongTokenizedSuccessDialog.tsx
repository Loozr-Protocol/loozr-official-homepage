import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../state/store";
import { Track } from "../../types/Track";
import { nearExplorerAccount } from "../../utils";

interface Props {
  handleCloseModal: () => void;
  track: Track;
}

export default function SongTokenizedSuccessDialog({
  handleCloseModal,
  track,
}: Props) {
  const navigate = useNavigate();
  const user = useSelector((state: AppState) => state.user.userInfo);

  return (
    <div className=" w-full h-screen flex flex-col !txt justify-center  md:w-[475px] md:h-auto relative z-[80]  md:rounded-2xl bg-[#12161F]">
      <>
        <div className=" p-8 flex items-center justify-between ">
          <p className=" txt font-bold text-xl text-white ">Success!!</p>
          <svg
            role="button"
            onClick={() => navigate("/explore", { replace: true })}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8341 1.04828L1.85547 17.0269"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.85547 1.04828L17.8341 17.0269"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className=" w-full flex h-auto pt-12 pb-9 px-10  flex-col items-center ">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 0C20.1309 0 0 20.1257 0 45C0 69.8691 20.1257 90 45 90C69.8709 90 90 69.8726 90 45C90 20.1309 69.8743 0 45 0ZM45 86.2491C22.2549 86.2491 3.75086 67.7451 3.75086 45C3.75086 22.2549 22.2549 3.75086 45 3.75086C67.7451 3.75086 86.2491 22.2549 86.2491 45C86.2491 67.7451 67.7451 86.2491 45 86.2491Z"
              fill="#15FFAB"
            />
            <path
              d="M39.9684 57.668L40.8723 58.701L41.5785 57.524L57.4608 31.0542C57.4923 31.0017 57.5606 30.9843 57.6138 31.016C57.6661 31.0477 57.6827 31.1152 57.6514 31.1673L57.6511 31.1677L40.9844 58.9463L40.9843 58.9464C40.9459 59.0105 40.8549 59.0186 40.8057 58.9623L40.8056 58.9622L33.0277 50.0731L33.0276 50.073C32.987 50.0266 32.9919 49.9567 33.0378 49.9165L33.0382 49.9161C33.0845 49.8756 33.1545 49.8805 33.1947 49.9264L33.1949 49.9266L39.9684 57.668Z"
              fill="#15FFAB"
              stroke="#15FFAB"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className=" w-full pt-8 flex flex-col items-center ">
          <p className=" max-w-[319px] leading-[22.5px] font-semibold text-[15px] text-center text-white ">
            Your song has been successfully tokenized and its music coin has
            been created on the blockchain!
          </p>
          <button
            onClick={() => {
              window.open(`${nearExplorerAccount(track.tokenUrl)}`, "_blank");
              navigate("/explore", { replace: true });
            }}
            className="!text-sm font-semibold py-[16px] mt-12 bg-s-gradient w-[352px] mb-6 outline-none focus:outline-none"
          >
            View on NEAR Explorer
          </button>
          <button
            onClick={() =>
              user
                ? navigate("/" + user.accountDomain, { replace: true })
                : null
            }
            className="!text-sm font-semibold py-[16px] bg-[#141922] w-[352px] mb-12 outline-none focus:outline-none"
          >
            View song on your profile
          </button>
        </div>
      </>
    </div>
  );
}
