import React from "react";
import NFT from "../components/SingleNFT";
import { nfts } from "../components/dummy/nfts";

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
