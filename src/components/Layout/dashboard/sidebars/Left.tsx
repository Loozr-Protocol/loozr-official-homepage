import React, { useEffect, useState } from "react";
import LoozrBeta from "../../../../assets/icons/loozr-beta.svg";

import Explore from "../../../../assets/svg/Explore";
import Artist from "../../../../assets/svg/Artist";
import Tracks from "../../../../assets/svg/Tracks";
import NFT from "../../../../assets/svg/NFT";
import Wallet from "../../../../assets/svg/Wallet";
import Notification from "../../../../assets/svg/Notification";
import More from "../../../../assets/svg/More";
import Memoji from "../../../../assets/img/memoji.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      className={`bg-dark-800 fixed left-0 h-screen pl-16 pr-14 py-14 mb-5`}
      style={{ minWidth: drawerMinWidth, maxWidth: `${drawerMaxWidth}vw` }}
    >
      <img
        src={LoozrBeta}
        alt=""
        className={`${isLoggedIn ? "mb-7" : "mb-16"}`}
      />
      {isLoggedIn ? (
        !hasLaunchedToken ? (
          <button
            onClick={launchToken}
            className="text-sm font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
          >
            Become an artist
          </button>
        ) : (
          <button
            onClick={launchToken}
            className="text-sm font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
          >
            Upload song
          </button>
        )
      ) : (
        ""
      )}
      <div className="w-full h-[85%] overflow-y-auto overflow-x-hidden">
        {tabs.map((tab: any) => (
          <div
            key={tab.label}
            className="flex items-center text-lg font-medium text-muted mb-7"
          >
            <tab.icon
              className={`object-contain w-5 h-5 mr-4 ${
                tab.path === pathname ? "text-white" : "text-[#536079]"
              }`}
            />

            <Link
              to={tab.path || "#!"}
              className={`${
                tab.path === pathname && "font-bold text-white"
              } cursor-pointer`}
            >
              {tab.label}
            </Link>
          </div>
        ))}
        <div className="h-px w-full bg-muted-50" />
        {isLoggedIn ? (
          <div
            onClick={() => push("/profile")}
            className="flex items-center justify-center w-full mt-16"
          >
            <img
              src={Memoji}
              alt=""
              className="object-contain w-16 h-12 rounded-full mr-3"
              style={{ border: "6px solid #141922" }}
            />
            <div className="w-full">
              <p className="text-lg font-extrabold text-white">Felix Harty</p>
              <p className="text-xs font-medium text-muted">
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
            className="flex items-center justify-center w-full mt-16 cursor-pointer"
            onClick={() => push("/login")}
          >
            <img
              src={Memoji}
              alt=""
              className="object-contain w-16 h-12 rounded-full mr-3"
              style={{ border: "6px solid #141922" }}
            />
            <div className="w-full">
              <p className="text-base font-extrabold text-white">
                Hello, there?
              </p>
              <p className="text-sm font-medium text-muted">Click to Sign in</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
