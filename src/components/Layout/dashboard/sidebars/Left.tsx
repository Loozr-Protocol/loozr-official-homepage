import React, { useEffect, useState } from "react";
import LoozrBeta from "../../../../assets/icons/loozr-beta.svg";
import Explore from "../../../../assets/icons/explore_icon.svg";
import Artist from "../../../../assets/icons/artiste_icon.svg";
import Tracks from "../../../../assets/icons/tracks_icon.svg";
import NFT from "../../../../assets/icons/nft.svg";
import Wallet from "../../../../assets/icons/wallet.svg";
import Notification from "../../../../assets/icons/notification.svg";
import More from "../../../../assets/icons/more.svg";
import Memoji from "../../../../assets/img/memoji.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const drawerMinWidth = 280;
export const drawerMaxWidth = 20;

const tabs = [
  {
    icon: Explore,
    label: "Explore",
    available: true,
    path: "/artistes/1",
  },
  {
    icon: Artist,
    label: "Artistes ",
    available: true,
  },
  {
    icon: Tracks,
    label: "Tracks",
    available: false,
  },
  {
    icon: NFT,
    label: "Music NFT",
    available: true,
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

  const launchToken = () => {
    sessionStorage.setItem("hasLaunchedToken", "true");
    setHasLaunchedToken(true);
    alert("Token launched successfully :)");
  };

  return (
    <div
      className={`bg-dark-800 fixed left-0 h-screen pl-16 pr-14 py-14 mb-5`}
      style={{ minWidth: drawerMinWidth, maxWidth: `${drawerMaxWidth}vw` }}
    >
      <img
        src={LoozrBeta}
        alt=""
        className={`${isLoggedIn && !hasLaunchedToken ? "mb-7" : "mb-16"}`}
      />
      {isLoggedIn && !hasLaunchedToken && (
        <button
          onClick={launchToken}
          className="text-base font-semibold py-[16px] rounded-full bg-s-gradient w-full mb-10 outline-none focus:outline-none"
        >
          Launch token
        </button>
      )}
      <div className="w-full h-[85%] overflow-y-auto overflow-x-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className="flex items-center text-lg font-medium text-muted mb-7"
          >
            <img
              src={tab.icon}
              alt=""
              className="object-contain w-5 h-5 mr-4"
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
          <div className="flex items-center justify-center w-full mt-16">
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
