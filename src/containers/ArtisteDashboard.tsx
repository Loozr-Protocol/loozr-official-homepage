import React from "react";
import Banner from "../assets/img/dashboard-banner.png";
import Arlene from "../assets/img/artists/arlene.png";
import ArrowLeft from "../assets/icons/caret-left.svg";
import ArrowRight from "../assets/icons/caret-right.svg";
import Suggestion from "../components/suggestion";
import Carousel from "../components/Carousel";
import VerifiedBadge from "../assets/icons/verified_badge.svg";
import { featured } from "../components/dummy/featuredArtist";

const ArtisteDashboard = () => {
  const handleMoveRight = () => {
    // if (isMobile) {
    //   document.getElementById(`carousel-${index}`).scrollLeft +=
    //     window.screen.width + 24;
    // } else {
    if (document.getElementById(`carousel`).scrollLeft >= window.screen.width) {
      document.getElementById(`carousel`).scrollLeft = 0;
    } else {
      document.getElementById(`carousel`).scrollLeft += 800;
    }
    // }
  };
  const handleMoveLeft = () => {
    // if (isMobile) {
    //   document.getElementById(`carousel`).scrollLeft -=
    //     window.screen.width + 24;
    // } else {
    document.getElementById(`carousel`).scrollLeft -= 800;
    // }
  };
  return (
    <div className="w-full">
      {/* <div
        className="min-w-full w-full  min-h-[290px] bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end mb-7"
        style={{ background: `url(${Banner})`, backgroundColor: "#000" }}
      >
        <p>
          <span className="text-loozr-purple font-medium text-sm">MUSIC</span>{" "}
          <span className="text-xs">/ 2 months ago</span>
        </p>
        <p className="text-white font-bold text-2xl max-w-[300px]">
          DISCOVER, BUY & SELL ARTISTE Coins.
        </p>
      </div> */}
      <Carousel />
      <div className="flex items-center justify-between mb-10">
        <p className="font-medium text-base md:text-lg text-white">
          Featured artistes
        </p>
        <div className="flex items-center">
          <div
            className="py-1 px-2 border-[1.5px] border-dark-700 rounded-xl mr-5 cursor-pointer"
            onClick={() => handleMoveLeft()}
          >
            <img src={ArrowLeft} alt="" />
          </div>
          <div
            className="py-1 px-2 border-[1.5px] border-dark-700 rounded-xl cursor-pointer"
            onClick={() => handleMoveRight()}
          >
            <img src={ArrowRight} alt="" />
          </div>
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
              className="flex flex-col items-center mr-4 min-w-max md:min-w-[100px] relative"
            >
              <div className="relative">
                <img
                  src={_.img}
                  alt=""
                  className="object-cover h-20 md:h-24 w-20 md:w-24 rounded-full border-[15px] border-dark-700 mb-[18px]"
                  style={{
                    border: "8px solid #141922",
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
              <p className="font-normal md:font-bold text-base md:text-base text-white text-center">
                {_.name}
              </p>
              <p className="text-muted text-xs font-medium md:font-semibold text-center">
                {_.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Suggestion />
    </div>
  );
};

export default ArtisteDashboard;
