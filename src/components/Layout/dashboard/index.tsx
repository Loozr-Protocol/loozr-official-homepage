import React from "react";
import { Left, drawerMaxWidth, drawerMinWidth } from "./sidebars";
import { TopBar } from "./topbar";
import AppStore from "../../../assets/img/AppStore.png";
import GooglePlay from "../../../assets/img/GooglePlay.png";
import Arlene from "../../../assets/img/artists/arlene.png";
import useMediaQuery from "@mui/material/useMediaQuery";

import Explore from "../../../assets/svg/Explore";
import Artist from "../../../assets/svg/Artist";
import Wallet from "../../../assets/svg/Wallet";
import More from "../../../assets/svg/More";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
    icon: Wallet,
    label: "Wallet",
    available: true,
    path: "/wallet",
  },
  {
    icon: More,
    label: "LOOZRverse",
    available: true,
  },
];

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const xl = useMediaQuery("(min-width:1280px)");
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const { pathname } = useLocation();

  console.log({ md, lg, xl });
  return (
    <div className="flex justify-between w-full !overflow-x-hidden">
      <Left />
      <div
        className={`flex-1 pt-4 pb-10 px-3 md:px-0 md:pl-14 lg:pr-28 !overflow-x-hidden mb-24 md:mb-auto`}
        style={{
          marginLeft: lg
            ? `calc(${drawerMaxWidth}vw)`
            : // : lg
            // ? `200px`
            md
            ? "100px"
            : "auto",
          marginRight: "auto",
          // zoom: md ? "80%" : "100%",
          maxWidth: `100vw`,
        }}
      >
        <div className="flex flex-col items-center w-full mx-auto">
          <TopBar />
          <div className="w-full">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="w-full md:w-[70%] md:pl-3 md:pr-8">
                {children}
              </div>
              <div className="w-full md:w-[30%]">
                <div className="bg-dark-800 w-full min-h-[210px] mb-7">
                  <div className="py-8 px-6 border-dark-900 border-b">
                    <p className="text-muted text-xs font-medium mb-1.5">
                      Your Balance
                    </p>
                    <p className="text-white text-2xl font-extrabold mb-2">
                      300.1512 <span className="text-sm font-medium">LZR</span>
                    </p>
                    <div className="text-white text-xs">≈ $0.0007 USD</div>
                  </div>
                  <div className="py-4 px-6 text-xs font-medium text-muted">
                    ~ $0.05 USD per LZR coin price
                  </div>
                </div>
                <div className="flex justify-between items-center mb-10">
                  <p className="text-sm font-semibold text-white">
                    Suggested For You
                  </p>
                  <p className="text-xs font-medium text-muted">View all</p>
                </div>

                {Array(3)
                  .fill(1)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-9"
                    >
                      <div className="flex items-center text-muted">
                        <img
                          src={Arlene}
                          alt=""
                          className="h-[45px] w-[45px] rounded-full mr-2"
                          style={{ border: "6px solid #141922" }}
                        />
                        <div>
                          <p className="text-sm font-bold text-white">
                            Nathan Jose
                          </p>
                          <p className="flex items-center">
                            <span className="text-muted text-[10px] font-extrabold mr-1">
                              $HARTY
                            </span>{" "}
                            <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                            <span className="text-[10px] text-muted font-medium">
                              $3,001.99
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] font-medium text-loozr-purple">
                        Follow
                      </p>
                    </div>
                  ))}

                <div className="mt-[67px] flex justify-between items-center mb-[18px]">
                  <p className="text-sm font-semibold text-muted">
                    Coming Soon
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <img
                    src={AppStore}
                    alt=""
                    className="w-[45%] cursor-pointer"
                  />
                  <img
                    src={GooglePlay}
                    alt=""
                    className="w-[45%] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden fixed bottom-0 py-4 px-7 bg-dark-900 w-full">
        {tabs.map((tab, index) => (
          <Link
            to={tab.path || "#!"}
            key={index}
            className={`hover:flex flex flex-col items-center justify-center ${
              tabs.length !== index + 1 && "mr-4"
            }`}
          >
            <tab.icon
              className={`object-contain w-3.5 h-3.5 mb-2 ${
                tab.path === pathname ? "text-white" : "text-[#536079]"
              }`}
            />
            <p
              className={`text-xs font-medium ${
                tab.path === pathname ? "text-white" : "text-[#536079]"
              }`}
            >
              {tab.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
