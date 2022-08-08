import React from "react";
import Arlene from "../assets/img/artists/arlene.png";

const Artistes = () => {
  return (
    <div className="w-full mt-16 pb-28">
      <p className="text-white text-2xl font-semibold mb-11">Artistes</p>
      <div className="grid grid-cols-4 gap-y-16">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center mr-4 min-w-[200px]"
            >
              <img
                src={Arlene}
                alt=""
                className="object-cover h-36 w-36 rounded-full border-[15px] border-dark-700 mb-[18px]"
                style={{
                  border: "15px solid #141922",
                }}
              />
              <p className="mb-1 font-extrabold text-xl text-white text-center">
                $ARLENE
              </p>
              <p className="text-muted text-base font-semibold text-center">
                2,474.14 LZR
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Artistes;
