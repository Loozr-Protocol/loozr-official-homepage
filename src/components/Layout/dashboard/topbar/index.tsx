import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../state/store";
import { useBecomeArtisteCallback } from "../../../../state/artist/hooks";
import { setPageLoaderStatus } from "../../../../state/misc";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../../../../assets/icons/search.svg";
import LoozrGradient from "../../../../assets/icons/loozr-gradient.svg";
import SearchWhiteIcon from "../../../../assets/icons/search-white.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import UserIcon from "../../../../assets/icons/user.svg";
import { LZR_IN_USD } from "../../../../config/constants";

export const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleBecomeArtiste } = useBecomeArtisteCallback();
  const user = useSelector((state: AppState) => state.user.userInfo);

  const becomeArtist = async () => {
    dispatch(setPageLoaderStatus(true));
    try {
      await handleBecomeArtiste({});
      window.location.reload();
    } catch (err) {
      dispatch(setPageLoaderStatus(false));
    }
  };

  return (
    <div className="w-full mb-6 px-3">
      <div className="flex justify-between items-center">
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search artiste, fans… "
            className="placeholder:text-[#536079] rounded-full py-[6px] text-xs"
            style={{
              paddingLeft: "3.5rem",
              paddingRight: 16,
              width: 400,
              background: "#12161F",
              color: "#536079",
            }}
          />
          <img
            src={SearchIcon}
            alt=""
            className="absolute w-4 h-4 object-contain inset-y-[16px] left-7"
          />
        </div>
        <div className="md:hidden flex items-center">
          <p className="text-xl text-white pr-0.5 font-bold">~${LZR_IN_USD}/</p>
          <img
            src={LoozrGradient}
            alt=""
            className="pointer-cursor"
            onClick={() => navigate("/explore")}
          />
        </div>
        <div className="md:hidden flex items-center">
          {/*
          <img
            src={SearchWhiteIcon}
            alt=""
            className="ml-8"
            width={17}
            height={17}
          /> */}
          {!user.isArtist ? (
          <img
            src={PlusIcon}
            onClick={becomeArtist}
            alt=""
            className="pointer-cursor"
            width={17}
            height={17}
          />
          ) : null}
          <img
            src={UserIcon}
            alt=""
            className="ml-8 pointer-cursor"
            onClick={() => navigate("/profile")}
            width={17}
            height={17}
          />
        </div>
      </div>
    </div>
  );
};
