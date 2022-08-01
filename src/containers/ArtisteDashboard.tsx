import React from "react";
import Banner from "../assets/img/dashboard-banner.png";
import Arlene from "../assets/img/artists/arlene.png";
import Goya from "../assets/img/artists/goya.png";

import AppStore from "../assets/img/AppStore.png";
import GooglePlay from "../assets/img/GooglePlay.png";

import ArrowLeft from "../assets/icons/caret-left.svg";
import ArrowRight from "../assets/icons/caret-right.svg";
import Suggestion from "../components/suggestion";

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
      <div
        className="w-full  min-h-[290px] bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end mb-7"
        style={{ background: `url(${Banner})` }}
      >
        <p>
          <span className="text-loozr-purple font-medium text-sm">MUSIC</span>{" "}
          <span className="text-xs">/ 2 months ago</span>
        </p>
        <p className="text-white font-bold text-2xl max-w-[300px]">
          DISCOVER, BUY & SELL ARTISTE Coins.
        </p>
      </div>
      <div className="flex items-center justify-between mb-10">
        <p className="font-bold text-2xl">Featured artistes</p>
        <div className="flex items-center">
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl mr-5 cursor-pointer">
            <img src={ArrowLeft} alt="" onClick={() => handleMoveLeft()} />
          </div>
          <div className="py-2 5 px-3 border-[1.5px] border-dark-700 rounded-xl cursor-pointer">
            <img src={ArrowRight} alt="" onClick={() => handleMoveRight()} />
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-auto whitespace-nowrap mb-16">
        <div id={"carousel"} className="flex">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div
                key={index}
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
      <Suggestion />
      {/* <div className="w-full md:w-[30%]">
          <div className="bg-dark-700 w-full min-h-[290px] mb-7">
            <div className="py-11 px-9 border-dark-900 border-b">
              <p className="text-muted text-base font-medium mb-1">
                Your Balance
              </p>
              <p className="text-white text-4xl font-extrabold mb-2.5">
                300.1512 <span className="text-sm font-medium">LZR</span>
              </p>
              <div className="text-white text-lg">≈ $0.0007 USD</div>
            </div>
            <div className="py-6 px-9 text-lg font-medium text-muted">
              ~ $0.05 USD per LZR coin price
            </div>
          </div>
          <div className="flex justify-between items-center mb-10">
            <p className="text-lg font-semibold text-muted">
              Suggested For You
            </p>
            <p className="text-sm font-medium text-muted">View all</p>
          </div>

          {Array(3)
            .fill(1)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-9"
              >
                <div className="flex items-center text-muted">
                  <img
                    src={Arlene}
                    alt=""
                    className="h-[60px] w-[60px] rounded-full mr-3"
                    style={{ border: "6px solid #141922" }}
                  />
                  <div>
                    <p className="text-xl font-extrabold">Nathan Jose</p>
                    <p className="flex items-center">
                      <span className="text-muted text-sm font-extrabold mr-1">
                        $HARTY
                      </span>{" "}
                      <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                      <span className="text-muted font-medium">$3,001.99</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold text-loozr-purple">Follow</p>
              </div>
            ))}

          <div className="mt-[67px] flex justify-between items-center mb-[18px]">
            <p className="text-lg font-semibold text-muted">Coming Soon</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <img src={AppStore} alt="" className="w-[45%] cursor-pointer" />
            <img src={GooglePlay} alt="" className="w-[45%] cursor-pointer" />
          </div>
        </div> */}
    </div>
  );
};

export default ArtisteDashboard;
