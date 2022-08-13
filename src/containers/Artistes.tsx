import React from "react";
import VerifiedBadge from "../assets/icons/verified_badge.svg";

import Arlene from "../assets/img/artists/arlene.png";
import Magnus from "../assets/img/artists/magnus.png";
import Christian from "../assets/img/artists/christian.png";
import Atlassian from "../assets/img/artists/atlasian.png";

export const featured = [
  {
    name: "$ARLENE",
    img: Arlene,
    price: "2,474.14 LZR",
    verified: true,
  },
  {
    name: "$MAGNUS_",
    img: Magnus,
    price: "404.99 LZR",
    verified: true,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: false,
  },
  {
    name: "$ATLAISIAN",
    img: Atlassian,
    price: "1,444.93 LZR",
    verified: true,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: false,
  },
  {
    name: "$MAGNUS_",
    img: Magnus,
    price: "404.99 LZR",
    verified: false,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: true,
  },
  {
    name: "$ARLENE",
    img: Arlene,
    price: "2,474.14 LZR",
    verified: true,
  },
  {
    name: "$MAGNUS_",
    img: Magnus,
    price: "404.99 LZR",
    verified: true,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: false,
  },
  {
    name: "$ATLAISIAN",
    img: Atlassian,
    price: "1,444.93 LZR",
    verified: true,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: false,
  },
  {
    name: "$ATLAISIAN",
    img: Atlassian,
    price: "1,444.93 LZR",
    verified: false,
  },
  {
    name: "$ARLENE",
    img: Arlene,
    price: "2,474.14 LZR",
    verified: false,
  },
  {
    name: "$MAGNUS_",
    img: Magnus,
    price: "404.99 LZR",
    verified: true,
  },
  {
    name: "$CHRISTIAN",
    img: Christian,
    price: "35.93 LZR",
    verified: false,
  },
];

const Artistes = () => {
  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white text-lg font-thin md:font-medium mb-7">
        Artistes
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-16">
        {featured.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center mr-4 min-w-full md:min-w-[140px]"
          >
            <div className="relative">
              <img
                src={_.img}
                alt=""
                className="object-cover h-24 w-24 md:h-32 md:w-32 rounded-full border-[15px] border-dark-700 mb-[18px]"
                style={{
                  border: "10px solid #141922",
                }}
              />
              {_.verified && (
                <img
                  src={VerifiedBadge}
                  alt=""
                  className="absolute w-4 md:w-6 h-4 md:h-6 right-3 bottom-6"
                />
              )}
            </div>
            <p className="font-normal mb-1.5 md:font-bold text-base md:text-base text-white text-center">
              $ARLENE
            </p>
            <p className="text-muted text-xs font-medium md:text-xs md:font-medium text-center">
              2,474.14 LZR
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artistes;
