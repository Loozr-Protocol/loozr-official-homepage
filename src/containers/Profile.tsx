import React, { useEffect, useMemo, useState } from "react";
import {
  transactions,
  tokenHolder,
  coinsBought,
} from "../components/dummy/wallet";
import { capitalize } from "../functions";
import Arrow45Deg from "../assets/icons/arrow-45deg.svg";
import Arrow225Deg from "../assets/icons/arrow-225deg.svg";
import Arlene from "../assets/img/artists/arlene.png";
import { ReactComponent as MoreIcon } from "../assets/icons/more-white.svg";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../state/store";
import { MIXER_ACCOUNT } from "../config/constants";
import { abbrevNumber } from "../utils/formatBalance";

const data = [
  { name: "May", uv: 70000 },
  { name: "May", uv: 70000 },
  { name: "May", uv: 70000 },
  { name: "Feb", uv: 63000 },
  { name: "Jan", uv: 27000 },
  { name: "Mar", uv: 40000 },
  { name: "Apr", uv: 10000 },
  { name: "Jun", uv: 43000 },
  { name: "Dec", uv: 32000 },
];

const Profile = () => {
  const push = useNavigate();
  const [active, setActive] = useState(1);
  const user = useSelector((state: AppState) => state.user.userInfo);
  const lzrAccountId = `${user.account_id}.${MIXER_ACCOUNT}`;
  const [hasLaunchedToken, setHasLaunchedToken] = useState(
    sessionStorage.getItem("hasLaunchedToken") === "true"
  );

  useEffect(() => {
    setHasLaunchedToken(sessionStorage.getItem("hasLaunchedToken") === "true");
  }, []);

  // const renderHistory = useMemo(() => {
  //   switch (active) {
  //     case 1:
  //       return coinsBought.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-center">
  //             <img
  //               src={Arlene}
  //               alt=""
  //               className="h-8 md:h-[60px] w-8 md:w-[60px] rounded-full mr-3"
  //               style={{ border: "6px solid #141922" }}
  //             />
  //             <div>
  //               <p className="text-sm md:text-xl font-extrabold">{item.name}</p>
  //               <p className="text-xs md:text-base font-semibold text-muted">
  //                 You own 0.735 LZR
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               {capitalize(item.type)}
  //             </p>
  //             <p className="text-xs md:text-base font-semibold text-muted">
  //               Type of user
  //             </p>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="text-xs md:text-base font-semibold text-muted">
  //               USD value
  //             </p>
  //           </div>
  //         </div>
  //       ));
  //     case 2:
  //       return tokenHolder.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between text-white mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-center">
  //             <img
  //               src={Arlene}
  //               alt=""
  //               className="h-8 md:h-[60px] w-8 md:w-[60px] rounded-full mr-3"
  //               style={{ border: "6px solid #141922" }}
  //             />
  //             <div>
  //               <p className="text-sm md:text-xl font-extrabold">{item.name}</p>
  //               <p className="md:text-base font-semibold text-muted">
  //                 Owns {item.owns} LZR of your artiste token
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               {capitalize(item.type)}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">
  //               Type of user
  //             </p>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">USD value</p>
  //           </div>
  //         </div>
  //       ));
  //     case 3:
  //       return transactions.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between text-white mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-start">
  //             <div className="rounded-full h-[44px] w-[44px] bg-dark-700 mr-4 flex items-center justify-center">
  //               <img
  //                 src={item.type === "cr" ? Arrow225Deg : Arrow45Deg}
  //                 alt=""
  //                 className="object-cover w-3 h-4"
  //               />
  //             </div>
  //             <div>
  //               <p className="text-sm md:text-xl font-medium">
  //                 {item.type === "dr" ? "Sent" : "Received"}
  //                 <span className="font-extrabold px-1">{item.token}</span>
  //                 coin
  //               </p>
  //               <p className="md:text-base font-semibold text-muted">
  //                 {item.type === "dr" ? "to" : "from"}{" "}
  //                 {item.type === "dr" ? item.to : item.from}
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">USD value</p>
  //           </div>
  //         </div>
  //       ));
  //   }
  // }, [active]);

  const renderHistory = useMemo(() => {
    switch (active) {
      case 1:
        return coinsBought.map((item, index) => (
          <div
            className="w-full flex items-center justify-between mb-6"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={Arlene}
                alt=""
                className="h-12 md:h-12 w-12 md:w-12 rounded-full mr-3"
                style={{ border: "6px solid #141922" }}
              />
              <div>
                <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                  {item.name}
                </p>
                <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                  You own 0.735 LZR
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                {capitalize(item.type)}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                Type of user
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                ~${item.price}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                USD value
              </p>
            </div>
          </div>
        ));
      case 2:
        return tokenHolder.map((item, index) => (
          <div
            className="w-full flex items-center justify-between text-white mb-6"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={Arlene}
                alt=""
                className="h-12 w-12 rounded-full mr-3"
                style={{ border: "6px solid #141922" }}
              />
              <div>
                <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                  {item.name}
                </p>
                <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                  Owns {item.owns} LZR of your artiste token
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                {capitalize(item.type)}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                Type of user
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                ~${item.price}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                USD value
              </p>
            </div>
          </div>
        ));
      case 3:
        return transactions.map((item, index) => (
          <div
            className="w-full flex items-center justify-between text-white mb-6"
            key={index}
          >
            <div className="flex items-start">
              <div className="rounded-full h-[44px] w-[44px] bg-dark-700 mr-4 flex items-center justify-center">
                <img
                  src={item.type === "cr" ? Arrow225Deg : Arrow45Deg}
                  alt=""
                  className="object-cover w-3 h-4"
                />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                  {item.type === "dr" ? "Sent" : "Received"}
                  <span className="font-extrabold px-1">{item.token}</span>
                  coin
                </p>
                <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                  {item.type === "dr" ? "to" : "from"}{" "}
                  {item.type === "dr" ? item.to : item.from}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                ~${item.price}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                USD value
              </p>
            </div>
          </div>
        ));
      default:
        return "";
    }
  }, [active]);
  return (
    <div className="w-full">
      {hasLaunchedToken && (
        <div className="w-full bg-dark-700 px-3 md:!pl-10 pt-7 pb- mb-[52px] min-h-[260px]">
          <div className="grid grid-cols-1 md:flex">
            <div className="flex-1">
              <p className="font-medium text-sm text-muted mb-2 md:mb-[22px]">
                My coin name
              </p>
              <p className="font-extrabold text-2xl md:text-3xl text-white mb-6">
                $ARLENE
              </p>
              <div className="flex items-center justify-between mb-6 md:mb-auto">
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                    $0.768
                  </p>
                  <p className="text-muted text-xs font-medium">
                    My coin price
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                    $104.58K
                  </p>
                  <p className="text-muted text-xs font-medium">Market cap</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                    203
                  </p>
                  <p className="text-muted text-xs font-medium">Holders</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                    10%
                  </p>
                  <p className="text-muted text-xs font-medium">% Reward</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="md:pl-24 flex md:flex-col kitems-center">
                <div>
                  <p className="font-medium text-sm text-muted mb-6">
                    My coin chart
                  </p>
                  <p className="mb-1 font-semibold text-sm">87%</p>
                  <p className="mb-3.5 font-medium text-sm text-[#15FFAB]">
                    +4.5%
                  </p>
                </div>
                <ResponsiveContainer width={170} height={80}>
                  <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#15FFAB"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#15FFAB"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" hide={true} />
                    <YAxis hide={true} />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#15FFAB"
                      // fill="#15FFAB"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-start mb-12">
        <img
          src={Arlene}
          alt={user.account_id}
          className="h-8 md:h-[170px] w-8 md:w-[170px] rounded-full mr-3"
          style={{ border: "20px solid #141922" }}
        />
        <div className="md:ml-10">
          <p className="text-xl md:text-xl font-medium text-white mb-1.5">
            {lzrAccountId}
          </p>
          <p className="text-muted font-medium text-sm md:text-sm mb-[10px]">
            <span>{user.account_id}</span>
            {user.is_artist ? (
              <span className="pointer ml-1.5 pl-2 before:top-2">Artiste</span>
            ) : (
              ""
            )}
          </p>
          <p className="text-white max-w-[435px] text-sm md:text-sm mb-[20px]">
            {user.bio}
          </p>
          <div className="flex items-center mb-9">
            <p className="text-xs md:text-sm font-bold mr-6">
              {abbrevNumber(user.followers_count)}
              <span className="ml-2 text-sm text-muted font-medium">
                Followers
              </span>
            </p>
            <p className="text-xs md:text-sm font-bold mr-6">
              {abbrevNumber(user.followings_count)}
              <span className="ml-2 text-sm text-muted font-medium">
                Following
              </span>
            </p>
            {user.is_artist ? <p className="text-xs md:text-sm font-bold">
              61.2k
              <span className="ml-2 text-sm text-muted font-medium">
                Listens
              </span>
            </p>: null}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => push("/profile/edit")}
              className="py-3 px-16 text-sm font-medium bg-loozr-purple rounded-full"
            >
              Update
            </button>
            <div className="w-[50px] h-[50px] rounded-full bg-dark-700 flex items-center justify-center ml-6">
              <MoreIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-2 mb-9 border-b-2 border-muted-50 flex items-center text-sm font-medium text-muted">
        <p
          className={`mr-10 cursor-pointer ${
            active === 1 ? "active-tab-bottom" : "text-muted font-medium"
          }`}
          onClick={() => setActive(1)}
        >
          Coins bought
        </p>
        <p
          className={`mr-10 cursor-pointer ${
            active === 2 ? "active-tab-bottom" : "text-muted font-medium"
          }`}
          onClick={() => setActive(2)}
        >
          My coin holders
        </p>
        <p
          className={`cursor-pointer ${
            active === 3 ? "active-tab-bottom" : "text-muted font-medium"
          }`}
          onClick={() => setActive(3)}
        >
          Transactions
        </p>
      </div>
      {renderHistory}
    </div>
  );
};

export default Profile;
