import React, { useState } from "react";
import WithNear from "../components/buy/WithNear";
import WithUSD from "../components/buy/WithUSD";

const BuyLzr = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full mt-16">
      <p className="text-white text-2xl font-semibold mb-12">Buy LZR</p>
      <div className="w-full pt-[19px] border-t-2 border-muted-50 flex items-center text-2xl font-medium text-muted mb-20">
        <p
          className={`mr-10 cursor-pointer text-sm md:text-xl  ${
            active === 1
              ? "text-white font-semibold relative before:absolute before:w-full before:h-0.5 before:bg-loozr-purple before:top-[-22px]"
              : "font-normal text-muted"
          }`}
          onClick={() => setActive(1)}
        >
          Buy with USD
        </p>
        <p
          className={`mr-10 cursor-pointer text-sm md:text-xl  ${
            active === 2
              ? "text-white font-semibold relative before:absolute before:w-full before:h-0.5 before:bg-loozr-purple before:top-[-22px]"
              : "font-normal text-muted"
          }`}
          onClick={() => setActive(2)}
        >
          Buy with NEAR
        </p>
      </div>
      {active === 1 && <WithUSD />}
      {active === 2 && <WithNear />}
    </div>
  );
};

export default BuyLzr;
