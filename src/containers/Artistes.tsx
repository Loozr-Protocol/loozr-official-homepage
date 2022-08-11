import React from "react";
import Arlene from "../assets/img/artists/arlene.png";

const Artistes = () => {
  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white text-lg font-thin md:font-medium mb-7">
        Artistes
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-16">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center mr-4 min-w-full md:min-w-[170px]"
            >
              <img
                src={Arlene}
                alt=""
                className="object-cover h-36 w-36 rounded-full border-[15px] border-dark-700 mb-[18px]"
                style={{
                  border: "10px solid #141922",
                }}
              />
              <p className="mb-1 font-normal md:font-bold text-base md:text-base text-white text-center">
                $ARLENE
              </p>
              <p className="text-muted text-xs font-medium md:font-semibold text-center">
                2,474.14 LZR
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Artistes;
