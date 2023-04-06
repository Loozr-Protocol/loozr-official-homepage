import React from "react";
import Goya from "../../assets/img/artists/goya.png";

import ArrowLeft from "../../assets/icons/caret-left.svg";
import ArrowRight from "../../assets/icons/caret-right.svg"; 
import SlidesButton from "../SlidesButton";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


const tracks = [
  {
    title: "Password Infinity",
    artist: "EvgenyBardyuzha",
    img: "https://cdn.pixabay.com/audio/2022/10/18/12-55-08-891_200x200.jpg",
  },
  {
    title: "Inspiring Cinematic Ambien",
    artist: "Lexin Music",
    img: "https://cdn.pixabay.com/audio/2022/08/02/19-23-38-897_200x200.jpg",
  },
  {
    title: "Leonell Cassio - The Blackest Bouquet",
    artist: "LeonellCassio",
    img: "https://cdn.pixabay.com/audio/2022/08/31/19-48-37-847_200x200.jpg",
  },
  {
    title: "Motivational Epic Music / Inspiring Cinematic Background Music   ",
    artist: "SoulProdMusic",
    img: "https://cdn.pixabay.com/audio/2022/10/28/13-40-40-910_200x200.jpg",
  },
  {
    title: "Lofi Study",
    artist: "FASSounds",
    img: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
  },
  {
    title: "Happy Day",
    artist: "Stockaudios",
    img: "https://cdn.pixabay.com/audio/2022/11/18/00-18-44-918_200x200.jpg",
  },
  {
    title: "Weeknds",
    artist: "DayFox",
    img: "https://cdn.pixabay.com/audio/2022/10/12/09-28-04-865_200x200.jpg",
  },
  {
    title: "Stomping Rock (Four Shots)",
    artist: "AlexGrohl",
    img: "https://cdn.pixabay.com/audio/2022/05/17/19-32-35-334_200x200.jpg",
  },
  {
    title: "Price of Freedom",
    artist: "Daddy s Music",
    img: "https://cdn.pixabay.com/audio/2022/04/19/14-43-14-304_200x200.png",
  },
  {
    title: "Relaxing Music Vol.1",
    artist: "RelaxingTime",
    img: "https://cdn.pixabay.com/audio/2022/10/30/16-30-47-204_200x200.jpg",
  },
  {
    title: "Space",
    artist: "Music Unlimited",
    img: "https://cdn.pixabay.com/audio/2022/09/17/20-13-39-414_200x200.jpg",
  },
  {
    title: "Whip",
    artist: "prazkhanal",
    img: "https://cdn.pixabay.com/audio/2022/08/12/09-43-51-852_200x200.png",
  },
];

const Suggestion = () => {

  const [isShown, setIsShown] = React.useState("")
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

  const ref: any = React.useRef(null); 

  const Checking =(item: any, text: any)=> {
    if(text.length > 17){ 
      setIsShown(item)
    } else { 
      setIsShown("false")
    }
  }

  return (
    <div className="w-full mt-[2px] md:px-0 px-6 ">
      <div className="flex items-center justify-between pb-2">
        <p className="font-medium text-base md:text-[17px] text-white">
          Tracks you&apos;d love
        </p> 
          <SlidesButton position={ref} width={200} />
      </div>
      <div 
        ref={ref}
        className="max-w-full overflow-x-auto  overflow-y-hidden  scroll_event whitespace-nowrap pt-3 px-2 pb-[74px]"
      >
        <div className="flex">
          {tracks.map((_, index) => (
              <motion.div  
                whileHover={{
                  scale: 1.02, 
                  transition: { duration: 0.3 },
                }}
                onMouseOver={()=> Checking(index+"", _.title )}
                onMouseOut={()=> Checking("false", _.title )}
                key={index} className="flex flex-col h-auto mr-4 min-w-[150px]">
                <img
                  src={_.img}
                  alt=""
                  className="object-cover h-36 w-h-36 mb-[15px]"
                />
                <div className=" w-full " > 
                  <Marquee speed={50} loop={isShown === index+"" ? 0 : -1} gradient={false} >
                    <p className="mb-[3px] font-medium text-sm text-white">
                      {_.title+" "+""}
                    </p> 
                  </Marquee> 
                </div>
                <p className="text-muted text-xs font-normal md:text-[13px] mt-[2px] md:font-normal">
                  {_.artist}
                </p>
              </motion.div>
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
