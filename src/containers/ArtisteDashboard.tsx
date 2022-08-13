import React, { useEffect, useState } from "react";
import Arrow from "../assets/Arrow.svg";
import Heart from "../assets/Heart.svg";
import Chart from "../assets/Chart.svg";
import Suggestion from "../components/suggestion";
import Carousel from "../components/Carousel";
import VerifiedBadge from "../assets/icons/verified_badge.svg";
import { featured } from "../components/dummy/featuredArtist";
import { Link } from "react-router-dom";
import NFT from "../components/SingleNFT";
import { nfts } from "../components/dummy/nfts";

const ArtisteDashboard = () => {
  const [_nfts, setNfts] = useState([]);

  useEffect(() => {
    const slice = nfts.slice(0, 3);
    setNfts(slice);
  }, []);

  return (
    <div className="w-full">
      <Carousel />
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-lg text-white">
          Featured artistes
        </p>
        <div className="flex items-center">
          <Link to="/artistes" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div>
      </div>
      <div
        id={"carousel"}
        className="max-w-full overflow-auto whitespace-nowrap mb-16"
      >
        <div className="flex">
          {featured.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center mr-4 min-w-max md:min-w-[145px] relative"
            >
              <div className="relative">
                <img
                  src={_.img}
                  alt=""
                  className="object-cover h-20 md:h-32 w-20 md:w-32 rounded-full border-[15px] border-dark-700 mb-[18px]"
                  style={{
                    border: "14px solid #141922",
                  }}
                />
                {_.verified && (
                  <img
                    src={VerifiedBadge}
                    alt=""
                    className="absolute w-4 md:w-8 h-4 md:h-8 right-3 bottom-6"
                  />
                )}
              </div>
              <p className="font-normal mb-1 md:font-bold text-base md:text-base text-white text-center">
                {_.name}
              </p>
              <p className="text-muted text-xs font-medium md:text-sm md:font-medium text-center">
                {_.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Suggestion />
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-lg text-white">
          Music NFT drops
        </p>
        <div className="flex items-center">
          <Link to="/nfts" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-16">
        {_nfts.map(({ platform, price, liked, token, img }, index) => (
          <NFT key={index} {...{ platform, price, liked, token, img }} />
        ))}
      </div>
      <p className="font-medium text-base md:text-lg text-white mb-6">
        How does Loozr work?
      </p>
      <div className="grid gap-5 lg:gap-10 mb-10">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
          <div className="bg-dark-700 py-7 px-7">
            <img src={Arrow} alt="" className="w-10 h-10 mb-[19px]" />
            <p className="font-normal text-sm text-white mb-2.5">
              Launch Your Own Coin
            </p>
            <p className="text-muted text-xs font-medium">
              Get tokenised by creating your Profile, adding your Songs &
              Playlists, EPs, Albums, etc.
            </p>
          </div>
          <div className="bg-dark-700 py-7 px-7">
            <img src={Chart} alt="" className="w-10 h-10 mb-[19px]" />
            <p className="font-normal text-sm text-white mb-2.5">
              Buy, Sell & Trade
            </p>
            <p className="text-muted text-xs font-medium">
              Fans can stream and trade artiste profiles & songs with Loozr
              coins & explore the Metaverse music world.
            </p>
          </div>
        </div>
        <div className="bg-dark-700 py-7 px-7 md:w-[85%]">
          <img src={Heart} alt="" className="w-10 h-10 mb-[19px]" />
          <p className="font-normal text-sm text-white mb-2.5">
            Collective Wins!
          </p>
          <p className="text-muted text-xs font-medium">
            When fans invest in a token, like Bitcoin, the price of that token
            price rises. Artistes receive a percentage incentive from these
            trades in addition to their streaming money which they split with
            their token holders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtisteDashboard;
