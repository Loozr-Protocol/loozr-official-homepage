import React, { useState } from "react";
import USA from "../../assets/img/logo/usa.png";
import Loozr from "../../assets/icons/loozr.svg";

const WithUSD = () => {
  const [amount, setAmount] = useState<undefined | number>();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:max-w-[80%] mb-10">
        <div className="w-full md:max-w-[45%] flex-1 py-6 px-6 bg-dark-800">
          <div className="flex justify-between w-full mb-4">
            <p className="text-sm font-medium">You pay</p>
            <p className="text-sm font-medium flex items-center">
              <img
                src={USA}
                alt=""
                width={19}
                height={19}
                className="rounded-full"
              />
              <span className="ml-2">USD</span>
            </p>
          </div>
          <div className="flex justify-between relative">
            <input
              type="number"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              placeholder="0.00"
              className="placeholder:text-muted text-white font-semibold text-3xl bg-transparent px-4 py-0"
            />
            <span
              className={`absolute font-semibold text-3xl top-0 ${
                !amount ? "text-[#536079]" : "text-white"
              }`}
            >
              $
            </span>
          </div>
        </div>
        <div className="text-muted mx-6 text-3xl">≈</div>
        <div className="w-full md:w-auto flex-1 py-6 px-6 bg-dark-800">
          <div className="flex justify-between w-full mb-4">
            <p className="text-sm font-medium">You get</p>
            <div className="text-sm font-medium flex items-center">
              <div className="rounded-full h-5 w-5 bg-gradient-ld flex items-center justify-center">
                <img src={Loozr} alt="" width={10} height={10} />
              </div>
              <span className="ml-2">LZR</span>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <p
              className={`${
                amount ? "text-white" : "text-[#536079]"
              } font-semibold text-3xl`}
            >
              {(2.8 * amount || 0).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
      {amount ? (
        <div className="w-full md:max-w-[60%]">
          <div>
            <p className="text-sm font-medium text-muted mb-5">Summary:</p>
            <p className="py-4 px-7 text-white text-base font-medium bg-dark-800">
              You will get{" "}
              {(2.8 * amount).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{" "}
              LZR for $
              {(1 * amount).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{" "}
              USD
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="max-w-[50%] mt-[50px]">
        <button
          disabled={!amount}
          className="py-4 text-white disabled:opacity-40 font-medium text-sm  bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
        >
          Buy -{" "}
          {(2.8 * amount || 0).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}{" "}
          LZR
        </button>
      </div>
    </>
  );
};

export default WithUSD;
