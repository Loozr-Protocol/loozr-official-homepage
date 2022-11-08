import React from "react";
import { Left, drawerMaxWidth } from "./sidebars";
import { TopBar } from "./topbar";
import AppStore from "../../../assets/img/AppStore.png";
import GooglePlay from "../../../assets/img/GooglePlay.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../../../config/constants";

import Explore from "../../../assets/svg/Explore";
import Artist from "../../../assets/svg/Artist";
import Wallet from "../../../assets/svg/Wallet";
import More from "../../../assets/svg/More";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LZR_IN_USD, MIXER_ACCOUNT } from "../../../config/constants";
import { usePollLZRBalance } from "../../../state/wallet/hooks/fetchBalance";
import { useSelector } from "react-redux";
import { AppState } from "../../../state/store";
import { formatBalanceUSD, formatNumber, getFullDisplayBalance } from "../../../utils/formatBalance";
import SuggestedFollows from "../../suggestion/SuggestedFollows";
import { nearExplorerAccount } from "../../../utils";

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
  // const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const { pathname } = useLocation();

  const user = useSelector((state: AppState) => state.user.userInfo);
  const lzrAccountId = `${user?.accountId}.${MIXER_ACCOUNT}`;
  const balanceResult = usePollLZRBalance(lzrAccountId);
  const balanceBN = getFullDisplayBalance(balanceResult);
  
  const balanceInLzr = formatNumber(Number(balanceBN));
  const balanceUsd = formatBalanceUSD(Number(balanceBN));

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; 

  return (
    <div className=" w-full flex flex-col justify-center items-center " > 
      <div className="flex justify-between relative h-screen w-full md:w-[768px] px-6 lg:w-full !overflow-hidden">
        <Left />
        <div
          className={`flex-1 pt-4 pb-10 md:px-0 md:pl-7 lg:pr-0 !overflow-x-hidden md:mb-auto`}
          style={{
            // marginLeft: xl
            //   ? `calc(${drawerMaxWidth}vw)`
            //   : // : lg
            //   // ? `200px`
            //   md
            //   ? "100px"
            //   : "auto",
            // marginRight: "auto",
            // zoom: md ? "80%" : "100%",
            maxWidth: `100vw`,
          }}
        >
          <div className="flex flex-col relative h-screen overflow-y-hidden items-center w-full"> 
            <TopBar /> 
            <div className="w-full md:-mt-2 ">
              <div className="w-full flex  flex-col md:flex-row md:justify-between md:items-start">
                <div className="w-full lg:w-[70%] md:pl-0 md:pr-7 h-[90vh] overflow-y-auto ">
                  {children}
                </div> 
                  <div className="w-full hidden lg:flex flex-col lg:w-[340px] xl:w-[350px]">
                  <div  style={{ background: "linear-gradient(180deg, #12161F 0%, rgba(18, 22, 31, 0) 100%)" }} className="flex flex-col w-full min-h-[210px] mb-7">
                    <div className="py-8 px-6 border-dark-900 border-b">
                      <p className="text-muted text-xs font-medium mb-1.5">
                        Your Balance
                      </p>
                      <p className="text-white text-2xl font-extrabold mb-2">
                        {!balanceInLzr ? balanceInLzr : "0.00"}{" "}
                        <span className="text-sm font-medium">LZR</span>
                      </p>
                      <div className="text-white text-xs">
                        ≈ ${!balanceUsd ? balanceUsd : "0.00"} USD
                      </div>
                    </div>
                    <div className="py-4 px-6 text-xs font-medium text-muted">
                      ~ ${!LZR_IN_USD ? LZR_IN_USD : "0.00"} USD per LZR coin price
                    </div>
                    <div className="flex justify-content-center mb-8">
                      {/* <a
                        target="_blank"
                        rel="noreferrer"
                        href={nearExplorerAccount(user?.accountDomain)}
                        className="py-3 px-3 sm:px-6 md:px-9 text-xs md:text-sm font-medium bg-muted-50 rounded-full"
                      >
                        View On Explorer
                      </a> */}
                    </div>
                  </div>
                  <SuggestedFollows />

                  <div className="mt-[67px] flex justify-between items-center  mb-[18px]">
                    <p className="text-[13px] font-medium leading-5 text-muted">
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
        {/* {isLoggedIn && (  */}
          <div className="flex items-center justify-between md:hidden fixed bottom-0 py-4 px-7 bg-dark-900 w-full">
            {tabs.map((tab, index) => (
              <Link
                to={tab.path || "#!"}
                key={index}
                className={`hover:flex flex flex-col items-center justify-center ${
                  tabs.length !== index + 1 && "mr-4"
                }`}
                onClick={() =>
                  tab.path ? null : toast.info("Coming soon!", TOAST_OPTIONS)
                }
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
        {/* )} */}
      </div>
    </div>
  );
};

export default Dashboard;
