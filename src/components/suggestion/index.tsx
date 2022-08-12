import React from "react";
import Goya from "../../assets/img/artists/goya.png";

import ArrowLeft from "../../assets/icons/caret-left.svg";
import ArrowRight from "../../assets/icons/caret-right.svg";
import { Link } from "react-router-dom";

const Suggestion = () => {
  const handleMoveRight = (id: number) => {
    console.log("courosel", document.getElementById(`carousel`));
    if (
      document.getElementById(`carousel-${id}`).scrollLeft >=
      window.screen.width
    ) {
      document.getElementById(`carousel-${id}`).scrollLeft = 0;
    } else {
      document.getElementById(`carousel-${id}`).scrollLeft += 800;
    }
  };
  const handleMoveLeft = (id: number) => {
    document.getElementById(`carousel-${id}`).scrollLeft -= 800;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-lg text-white">
          Tracks you&apos;d love
        </p>
        <div className="flex items-center">
          <Link to="/tracks" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div>
      </div>
      <div
        id={"carousel-1"}
        className="max-w-full overflow-auto whitespace-nowrap mb-[74px]"
      >
        <div className="flex">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div key={index} className="flex flex-col mr-4 min-w-[150px]">
                <img
                  src={Goya}
                  alt=""
                  className="object-cover h-36 w-h-36 mb-[18px]"
                />
                <p className="mb-1 font-normal text-sm text-white">
                  Chiling good
                </p>
                <p className="text-muted text-xs font-medium md:text-sm md:font-medium">
                  Goya Menor
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="hidden mflex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-lg text-white">
          Music NFT drops
        </p>
        <div className="flex items-center">
          <div
            className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl mr-5 cursor-pointer"
            onClick={() => handleMoveLeft(2)}
          >
            <img src={ArrowLeft} alt="" />
          </div>
          <div
            className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl cursor-pointer"
            onClick={() => handleMoveRight(2)}
          >
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div
        id={"carousel-2"}
        className="hidden max-w-full overflow-auto whitespace-nowrap mb-[74px]"
      >
        <div className="flex">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div key={index} className="flex flex-col mr-16 min-w-[200px]">
                <img
                  src={Goya}
                  alt=""
                  className="object-cover h-[200px] w-[200px] mb-[18px]"
                />
                <p className="pl-[21px] font-normal text-sm text-white">
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
