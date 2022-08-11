import React from "react";
import Near from "../assets/img/logo/near.svg";
import ETH from "../assets/img/logo/eth.svg";
import Sol from "../assets/img/logo/sol.svg";

// NFTS
import One from "../assets/img/nfts/1.png";
import Two from "../assets/img/nfts/2.png";
import Three from "../assets/img/nfts/3.png";
import Four from "../assets/img/nfts/4.png";
import Five from "../assets/img/nfts/5.png";
import Six from "../assets/img/nfts/6.png";
import NFT from "../components/SingleNFT";

const nfts = [
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: true,
    token: Near,
    img: One,
  },
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: false,
    token: ETH,
    img: Two,
  },
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: true,
    token: Sol,
    img: Three,
  },
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: true,
    token: Near,
    img: Four,
  },
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: true,
    token: Sol,
    img: Five,
  },
  {
    platform: "Mintbase.id",
    price: 0.24,
    liked: false,
    token: Near,
    img: Six,
  },
];

const Nfts = () => {
  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white text-lg font-thin md:font-medium mb-7">
        Music NFT drops
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
        {nfts.map(({ platform, price, liked, token, img }, index) => (
          <NFT key={index} {...{ platform, price, liked, token, img }} />
        ))}
      </div>
    </div>
  );
};

export default Nfts;
