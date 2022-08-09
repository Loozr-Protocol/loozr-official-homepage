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
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const { pathname } = useLocation();
  return (
    <div className="flex justify-between w-full !overflow-x-hidden">
      <Left />
      <div
        className={`flex-1 py-10 md:pl-14 lg:pr-28 !overflow-x-hidden mb-24 md:mb-auto`}
        style={{
          marginLeft: lg
            ? `calc(80px + ${drawerMaxWidth}vw)`
            : md
            ? "150px"
            : "auto",
          marginRight: "auto",
          zoom: md ? "80%" : "90%",
          maxWidth: `100vw`,
        }}
      >
        <TopBar />
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row gap-6 md:justify-between md:items-start">
            <div className="w-full md:w-[70%]">{children}</div>
            <div className="w-full md:w-[30%]">
              <div className="bg-dark-700 w-full min-h-[290px] mb-7">
                <div className="py-11 px-9 border-dark-900 border-b">
                  <p className="text-muted text-base font-medium mb-1">
                    Your Balance
                  </p>
                  <p className="text-white text-4xl font-extrabold mb-2.5">
                    300.1512 <span className="text-sm font-medium">LZR</span>
                  </p>
                  <div className="text-white text-lg">≈ $0.0007 USD</div>
                </div>
                <div className="py-6 px-9 text-lg font-medium text-muted">
                  ~ $0.05 USD per LZR coin price
                </div>
              </div>
              <div className="flex justify-between items-center mb-10">
                <p className="text-lg font-semibold text-muted">
                  Suggested For You
                </p>
                <p className="text-sm font-medium text-muted">View all</p>
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
                        className="h-[60px] w-[60px] rounded-full mr-3"
                        style={{ border: "6px solid #141922" }}
                      />
                      <div>
                        <p className="text-xl font-extrabold">Nathan Jose</p>
                        <p className="flex items-center">
                          <span className="text-muted text-sm font-extrabold mr-1">
                            $HARTY
                          </span>{" "}
                          <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                          <span className="text-muted font-medium">
                            $3,001.99
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-loozr-purple">
                      Follow
                    </p>
                  </div>
                ))}

              <div className="mt-[67px] flex justify-between items-center mb-[18px]">
                <p className="text-lg font-semibold text-muted">Coming Soon</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <img src={AppStore} alt="" className="w-[45%] cursor-pointer" />
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
              className={`object-contain w-5 h-5 mb-2 ${
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
