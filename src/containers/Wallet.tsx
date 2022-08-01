import React, { useMemo, useState } from "react";
import {
  transactions,
  tokenHolder,
  coinsBought,
} from "../components/dummy/wallet";
import { capitalize } from "../functions";
import Arrow45Deg from "../assets/icons/arrow-45deg.svg";
import Arrow225Deg from "../assets/icons/arrow-225deg.svg";
import Arlene from "../assets/img/artists/arlene.png";

const Wallet = () => {
  const [active, setActive] = useState(1);

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
      <div className="w-full bg-dark-700 p-14 mb-12">
        <div className="flex items-center justify-between mb-9">
          <p className="text-2xl font-semibold text-white">My Wallet</p>
          <p className="text-lg font-medium text-white">
            ~ $0.05 USD per LZR coin
          </p>
        </div>
        <p className="text-muted text-lg font-medium mb-2.5">Total Balance</p>
        <p className="flex items-end text-white mb-1">
          <span className="text-5xl font-black">300.1512</span>
          <span className="font-medium text-xl ml-2">LZR</span>
        </p>
        <p className="text-base font-medium text-white mb-12">≈ $0.0007 USD</p>
        <div className="flex items-center mb-11">
          <button className="py-[19px] px-7 lg:px-auto lg:w-[220px] rounded-full bg-white text-black mr-7 font-semibold">
            Send $LZR
          </button>
          <button className="py-[19px] px-7 lg:px-auto lg:w-[220px] rounded-full text-white border border-muted-50 font-semibold">
            Buy $LZR
          </button>
        </div>
        <p className="text-white text-xl">
          <span className="text-muted">Your Token ID:</span> lzr.yourname.near{" "}
          <span className="text-[#00FFFF] cursor-pointer">copy</span>
        </p>
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

export default Wallet;
