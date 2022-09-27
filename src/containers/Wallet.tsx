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
import { useNavigate } from "react-router-dom";
import { usePollLZRBalance } from "../state/wallet/hooks/fetchBalance";
import { LZR_IN_USD, MIXER_ACCOUNT } from "../config/constants";
import { AppState } from "../state/store";
import {
  formatBalanceUSD,
  formatNumber,
  getFullDisplayBalance,
} from "../utils/formatBalance";
import { useSelector } from "react-redux";
import { copy } from "../utils";

const Wallet = () => {
  const push = useNavigate();
  const [active, setActive] = useState(1);
  const user = useSelector((state: AppState) => state.user.userInfo);
  const lzrAccountId = `${user.accountId}.${MIXER_ACCOUNT}`;
  const balanceResult = usePollLZRBalance(lzrAccountId);
  const balanceBN = getFullDisplayBalance(balanceResult);

  const balanceInLzr = formatNumber(Number(balanceBN));
  const balanceUsd = formatBalanceUSD(Number(balanceBN));

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
                <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
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
      <div className="w-full bg-dark-700 p-4 md:!py-8 md:!px-11 mb-12">
        <div className="flex items-center justify-between mb-9">
          <p className="text-[17px] leading-7 font-thin md:font-medium text-white">
            My Wallet
          </p>
          <p className="text-xs md:text-sm leading-5 font-thin md:font-normal text-white">
            ~ ${LZR_IN_USD} USD per LZR coin
          </p>
        </div>
        <p className="text-muted text-sm font-normal mb-2.5">Total Balance</p>
        <p className="flex items-end text-white mb-1.5">
          <span className="text-2xl md:text-3xl font-black">
            {balanceInLzr}{" "}
          </span>
          <span className="font-medium text-base leading-7 ml-2">LZR</span>
        </p>
        <p className="font-light text-sm md:font-medium text-white mb-4 md:mb-8">
          ≈ ${balanceUsd} USD
        </p>
        <div className="flex items-center mb-8 md:mb-11">
          <button
            onClick={() => push("/lzr/send")}
            className="py-2.5 md:py-2.5 px-7 lg:px-auto lg:w-[130px] rounded-full bg-white text-black text-sm mr-4 font-semibold"
          >
            Send $LZR
          </button>
          <button
            onClick={() => push("/lzr/buy")}
            className="py-2.5 md:py-2.5 px-7 lg:px-auto lg:w-[130px] rounded-full text-white text-sm font-semibold"
            style={{ border: "1.5px solid #222A3B" }}
          >
            Buy $LZR
          </button>
        </div>
        <p className="text-white font-medium text-sm md:text-sm">
          <span className="text-muted">Your Token ID:</span> {lzrAccountId}
          <span
            className="text-[#00FFFF] cursor-pointer"
            onClick={() => copy(lzrAccountId)}
          >
            copy
          </span>
        </p>
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
          Coin holders
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

export default Wallet;
