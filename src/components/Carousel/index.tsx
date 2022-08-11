import React from "react";
import ReactSwipe from "react-swipe";
import Banner from "../../assets/img/dashboard-banner.png";

const Carousel = () => {
  let reactSwipeEl;

  const numberOfSlides = 3;
  const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
      <div
        key={i}
        className="w-full  min-h-[210px] bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end mb-7 relative"
        style={{ background: `url(${Banner})`, backgroundColor: "#000" }}
      >
        <p>
          <span className="text-loozr-purple font-medium text-sm">MUSIC</span>{" "}
          <span className="text-xs">/ 2 months ago</span>
        </p>
        <p className="text-white font-semibold text-lg max-w-[300px]">
          DISCOVER, BUY & SELL ARTISTE Coins.
        </p>
        {/* .flex.cols */}
      </div>
    );
  });

  return (
    <div>
      <ReactSwipe
        className="carousel"
        childCount={3}
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {paneNodes}
      </ReactSwipe>
      {/* <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button> */}
    </div>
  );
};

export default Carousel;
