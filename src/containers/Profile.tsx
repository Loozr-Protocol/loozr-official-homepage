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
  const [hasLaunchedToken, setHasLaunchedToken] = useState(
    sessionStorage.getItem("hasLaunchedToken") === "true"
  );

  useEffect(() => {
    setHasLaunchedToken(sessionStorage.getItem("hasLaunchedToken") === "true");
  }, []);

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
                className="h-[60px] w-[60px] rounded-full mr-3"
                style={{ border: "6px solid #141922" }}
              />
              <div>
                <p className="text-xl font-extrabold">{item.name}</p>
                <p className="text-base font-semibold text-muted">
                  You own 0.735 LZR
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-extrabold">{capitalize(item.type)}</p>
              <p className="text-base font-semibold text-muted">Type of user</p>
            </div>
            <div>
              <p className="text-xl font-extrabold">~${item.price}</p>
              <p className="text-base font-semibold text-muted">USD value</p>
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
                className="h-[60px] w-[60px] rounded-full mr-3"
                style={{ border: "6px solid #141922" }}
              />
              <div>
                <p className="text-xl font-extrabold">{item.name}</p>
                <p className="text-base font-semibold text-muted">
                  Owns {item.owns} LZR of your artiste token
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-extrabold">{capitalize(item.type)}</p>
              <p className="text-base font-semibold text-muted">Type of user</p>
            </div>
            <div>
              <p className="text-xl font-extrabold">~${item.price}</p>
              <p className="text-base font-semibold text-muted">USD value</p>
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
                <p className="text-xl font-medium">
                  {item.type === "dr" ? "Sent" : "Received"}
                  <span className="font-extrabold px-1">{item.token}</span>
                  coin
                </p>
                <p className="text-base font-semibold text-muted">
                  {item.type === "dr" ? "to" : "from"}{" "}
                  {item.type === "dr" ? item.to : item.from}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-extrabold">~${item.price}</p>
              <p className="text-base font-semibold text-muted">USD value</p>
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
        <div className="w-full bg-dark-700 px-10 py-7 mb-[52px] min-h-[290px]">
          <div className="grid grid-cols-2">
            <div>
              <p className="font-medium text-base text-muted mb-[22px]">
                Your Artiste token
              </p>
              <p className="font-extrabold text-3xl text-white mb-6">$ARLENE</p>
              <div className="grid grid-cols-4 items-center justify-between">
                <div>
                  <p className="font-bold text-base text-white">$0.768</p>
                  <p className="text-muted text-xs font-medium">
                    My coin price
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base text-white">$104.58K</p>
                  <p className="text-muted text-xs font-medium">Market cap</p>
                </div>
                <div>
                  <p className="font-bold text-base text-white">203</p>
                  <p className="text-muted text-xs font-medium">Holders</p>
                </div>
                <div>
                  <p className="font-bold text-base text-white">10%</p>
                  <p className="text-muted text-xs font-medium">% Reward</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-24 flex flex-col items-center">
                <p className="font-medium text-muted mb-6">Your token chart</p>
                <p className="mb-1 font-semibold text-lg">87%</p>
                <p className="mb-3.5 font-medium text-[#15FFAB]">+4.5%</p>
                <ResponsiveContainer width={200} height={80}>
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
          alt=""
          className="h-[170px] w-[170px] rounded-full mr-3"
          style={{ border: "20px solid #141922" }}
        />
        <div className="ml-20">
          <p className="text-3xl font-medium text-white mb-1.5">
            lzr.yourname.near
          </p>
          <p className="text-muted font-medium text-base mb-[20px]">
            <span>Arlene Daniels</span>
            <span className="pointer ml-1.5 pl-2 before:top-2">Artiste</span>
          </p>
          <p className="text-white max-w-[435px] text-base mb-[20px]">
            Hello fam i am a musician and i love playing music all round the
            world.
          </p>
          <div className="flex items center mb-9">
            <p className="text-base font-bold mr-6">
              1.3M
              <span className="ml-2 text-sm text-muted font-medium">
                Followers
              </span>
            </p>
            <p className="text-base font-bold mr-6">
              203
              <span className="ml-2 text-sm text-muted font-medium">
                Following
              </span>
            </p>
            <p className="text-base font-bold">
              61.2k
              <span className="ml-2 text-sm text-muted font-medium">
                Listens
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => push("/profile/edit")}
              className="py-3 px-16 text-base font-medium bg-loozr-purple rounded-full"
            >
              Update
            </button>
            <div className="w-[55px] h-[55px] rounded-full bg-dark-700 flex items-center justify-center ml-6">
              <MoreIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-[19px] mb-9 border-b-2 border-muted-50 flex items-center text-2xl font-medium text-muted">
        <p
          className={`mr-10 cursor-pointer ${
            active === 1 &&
            "font-semibold text-2xl relative before:absolute before:w-full before:h-1 before:bg-loozr-purple before:bottom-[-25px]"
          }`}
          onClick={() => setActive(1)}
        >
          Coins bought
        </p>
        <p
          className={`mr-10 cursor-pointer ${
            active === 2 &&
            "font-semibold text-2xl relative before:absolute before:w-full before:h-1 before:bg-loozr-purple before:bottom-[-25px]"
          }`}
          onClick={() => setActive(2)}
        >
          My coin holders
        </p>
        <p
          className={`cursor-pointer ${
            active === 3 &&
            "font-semibold text-2xl relative before:absolute before:w-full before:h-1 before:bg-loozr-purple before:bottom-[-25px]"
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
