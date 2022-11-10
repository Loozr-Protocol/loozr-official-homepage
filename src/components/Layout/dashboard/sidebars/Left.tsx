import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoozrBeta from "../../../../assets/icons/loozr-beta.svg";
import Loozr from "../../../../assets/icons/loozr.svg";

import Explore from "../../../../assets/svg/Explore";
import Artist from "../../../../assets/svg/Artist";
import Tracks from "../../../../assets/svg/Tracks";
import NFT from "../../../../assets/svg/NFT";
import Wallet from "../../../../assets/svg/Wallet";
import Notification from "../../../../assets/svg/Notification";
import More from "../../../../assets/svg/More";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import { AppState } from "../../../../state/store";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../../../../config/constants";
import { useBecomeArtisteCallback } from "../../../../state/artist/hooks";
import { setPageLoaderStatus } from "../../../../state/misc";
import Photo from "../../../Photo";

export const drawerMinWidth = 280;
export const drawerMaxWidth = 20;

const tabs = [
  {
    icon: Explore,
    label: "Explore",
    available: true,
    path: "/explore",
  },
  {
    icon: Artist,
    label: "Artistes ",
    available: true,
    path: "/artistes",
  },
  {
    icon: Tracks,
    label: "Tracks",
    available: false,
    path: "/tracks",
  },
  {
    icon: NFT,
    label: "Music NFT",
    available: true,
    path: "/nfts",
  },
  {
    icon: Wallet,
    label: "Wallet",
    available: true,
    path: "/wallet",
  },
  {
    icon: Notification,
    label: "Notifications",
    available: true,
    path: "/notifications",
  },
  {
    icon: More,
    label: "LOOZRverse",
    available: true,
  },
];

export const Left = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const push = useNavigate();
  const xl = useMediaQuery("(min-width:1280px)");
  // const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const user = useSelector((state: AppState) => state.user.userInfo);
  const { handleBecomeArtiste } = useBecomeArtisteCallback();

  const becomeArtist = async () => {
    dispatch(setPageLoaderStatus(true));
    try {
      await handleBecomeArtiste({});
      window.location.reload();
    } catch (err) {
      dispatch(setPageLoaderStatus(false));
    }
  };

  const musicUpload = () => {
    toast.info("Coming soon!", TOAST_OPTIONS);
  };
  
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; 

  return (
    <div
      className={`bg-dark-800 flex flex-col items-start h-screen md:pl-11 xl:pl-14 pr-auto md:pr-4 xl:pr-12 pt-8 pb-12 mb-5`}
      style={{
        // minWidth: xl ? drawerMinWidth : "auto",
        // maxWidth: md ? `${drawerMaxWidth}vw` : 0,
        width: xl ? `${drawerMaxWidth}vw` : md ? "max-content" : 0,
      }}
    >
      {xl ? (
        <img src={LoozrBeta} alt="" className={`w-32 h-8 mb-7`} />
      ) : (
        <img src={Loozr} alt="" className={`mb-6 ml-[12px] h-6 w-6`} />
      )}
      {isLoggedIn && ( 
        <>
          {!user?.isArtist ? (
                <button
                  onClick={becomeArtist}
                  className="hidden xl:block text-xs font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
                >
                  Become an artist
                </button>
          ) : (
            <button
              onClick={musicUpload}
              className="hidden xl:block text-xs font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
            >
              Upload song
            </button>
          )}
        </>
        )}
      <div className="w-full  xl:h-[85%] flex flex-col items-end xl:block overflow-y-auto overflow-x-hidden">
        {tabs.map((tab: any) => (
          <Link
            className="hover:flex flex items-center text-sm font-medium text-[#536079] mt-2.5 xl:mt-auto mb-[22px]"
            to={tab.path || "#!"}
            key={tab.label}
            onClick={() => tab.path ? null : toast.info("Coming soon!", TOAST_OPTIONS)}
          >
            <tab.icon
              className={`object-contain w-4 xl:w-3.5 h-4 xl:h-3.5 mr-3 xl:mr-4 ${
                tab.path === pathname ? "text-white" : "text-[#536079]"
              }`}
            />

            <span
              className={`${
                tab.path === pathname && "font-bold text-white"
              } cursor-pointer hidden xl:inline`}
            >
              {tab.label}
            </span>
          </Link>
        ))}
        <div className="h-px w-full lg:w-full bg-muted-50 mt-8 mb-7" />
        <div
          onClick={() => push("/profile")}
          className="flex items-center justify-center w-full mt-6 cursor-pointer"
        >
          <Photo
            alt=""
            className="object-contain w-12 h-12 xl:w-14 xl:h-14 rounded-full xl:mr-3"
            style={{ border: "5px solid #141922" }}
          />
          <div className="hidden xl:block w-full">
            <p className="text-sm font-extrabold text-white name-tag">
              {user?.accountId}
            </p>
            <p className="text-[11px] font-medium flex items-center w-auto flex-nowrap whitespace-nowrap text-muted">
              {user?.isArtist ? (
                <span>
                  <span className="uppercase">${user?.tokenName}</span>{" "}
                  <span className="h-1 w-1 rounded-full bg-muted opacity-90 mb-[3px]" />{" "}
                  Artiste
                </span>
              ) : (
                "Listener"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
