import React, { useEffect, useState } from "react";
import LoozrBeta from "../../../../assets/icons/loozr-beta.svg";
import Loozr from "../../../../assets/icons/loozr.svg";

import Explore from "../../../../assets/svg/Explore";
import Artist from "../../../../assets/svg/Artist";
import Tracks from "../../../../assets/svg/Tracks";
import NFT from "../../../../assets/svg/NFT";
import Wallet from "../../../../assets/svg/Wallet";
import Notification from "../../../../assets/svg/Notification";
import More from "../../../../assets/svg/More";
import Memoji from "../../../../assets/img/memoji.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";

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
  const push = useNavigate();
  const xl = useMediaQuery("(min-width:1280px)");
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const [hasLaunchedToken, setHasLaunchedToken] = useState(
    sessionStorage.getItem("hasLaunchedToken") === "true"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
    setHasLaunchedToken(sessionStorage.getItem("hasLaunchedToken") === "true");
  }, []);

  const launchToken = () => push("/launch-token");

  return (
    <div
      className={`bg-dark-800 fixed flex flex-col items-end lg:block left-0 h-screen md:pl-11 xl:pl-14 pr-auto md:pr-4 xl:pr-12 pt-8 pb-12 mb-5`}
      style={{
        // minWidth: xl ? drawerMinWidth : "auto",
        // maxWidth: md ? `${drawerMaxWidth}vw` : 0,
        width: lg ? `${drawerMaxWidth}vw` : md ? "max-content" : 0,
      }}
    >
      {xl ? (
        <img
          src={LoozrBeta}
          alt=""
          className={`w-32 h-8 ${isLoggedIn ? "mb-7" : "mb-16"}`}
        />
      ) : (
        <img
          src={Loozr}
          alt=""
          className={`${isLoggedIn ? "mb-7" : "mb-16"} h-6 w-6`}
        />
      )}
      {isLoggedIn ? (
        !hasLaunchedToken ? (
          <button
            onClick={launchToken}
            className="hidden xl:block text-xs font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
          >
            Become an artist
          </button>
        ) : (
          <button
            onClick={launchToken}
            className="hidden xl:block text-xs font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
          >
            Upload song
          </button>
        )
      ) : (
        ""
      )}
      <div className="w-full  h-[85%] flex flex-col items-end lg:block overflow-y-auto overflow-x-hidden">
        {tabs.map((tab: any) => (
          <Link
            className="hover:flex flex items-center text-sm font-medium text-[#536079] mb-[22px]"
            to={tab.path || "#!"}
            key={tab.label}
          >
            <tab.icon
              className={`object-contain w-3.5 h-3.5 mr-2 lg:mr-4 ${
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
        {isLoggedIn ? (
          <div
            onClick={() => push("/profile")}
            className="flex items-center justify-center w-full mt-6"
          >
            <img
              src={Memoji}
              alt=""
              className="object-contain w-8 h-8 lg:w-14 lg:h-10 rounded-full lg:mr-3"
              style={{ border: "6px solid #141922" }}
            />
            <div className="hidden xl:block w-full">
              <p className="text-xs font-extrabold text-white">Felix Harty</p>
              <p className="text-[11px] font-medium text-muted">
                {hasLaunchedToken ? (
                  <span>
                    $HARTY{" "}
                    <span className="h-1 w-1 rounded-full bg-muted opacity-90" />{" "}
                    Artiste
                  </span>
                ) : (
                  "Listener"
                )}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center w-full mt-6 cursor-pointer"
            onClick={() => push("/login")}
          >
            <img
              src={Memoji}
              alt=""
              className="object-contain w-8 h-8 lg:w-16 lg:h-12 rounded-full lg:mr-3"
              style={{ border: "6px solid #141922" }}
            />
            <div className="hidden xl:block w-full">
              <p className="text-xs font-extrabold text-white">Hello, there?</p>
              <p className="text-[10px] font-medium text-muted">
                Click to Sign in
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
