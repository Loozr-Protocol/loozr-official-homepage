import React from "react";
import Goya from "../../assets/img/artists/goya.png";

import ArrowLeft from "../../assets/icons/caret-left.svg";
import ArrowRight from "../../assets/icons/caret-right.svg";

const Suggestion = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-2xl text-white mb-6">
          Tracks you&apos;d love
        </p>
        <div className="flex items-center">
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl mr-5">
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-auto whitespace-nowrap mb-[74px]">
        <div className="flex">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div key={index} className="flex flex-col mr-4 min-w-[200px]">
                <img
                  src={Goya}
                  alt=""
                  className="object-cover h-52 w-52 mb-[18px]"
                />
                <p className="mb-1 font-extrabold text-xl text-white">
                  Chiling good
                </p>
                <p className="text-muted text-base font-semibold">Goya Menor</p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-2xl text-white">Music NFT drops</p>
        <div className="flex items-center">
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl mr-5">
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-auto whitespace-nowrap mb-[74px]">
        <div className="flex">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div key={index} className="flex flex-col mr-16 min-w-[250px]">
                <img
                  src={Goya}
                  alt=""
                  className="object-cover h-[250px] w-[250px] mb-[18px]"
                />
                <p className="pl-[21px] font-extrabold text-xl text-white">
                  Happy everyday
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
