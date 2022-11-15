import React, { useState } from "react";
import Selina from "../../assets/img/nfts/selina.png";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartFilledIcon from "../../assets/icons/heart-filled.svg";
import useAudioPlayer from "../../hooks/useAudioPlayer";
import Play from "../../assets/svg/controls/play.svg";
import Pause from "../../assets/svg/controls/pause.svg";
import { motion } from "framer-motion";

type NFTProp = {
  album: any,
  artist: any;
  song: any;
  platform: string;
  price: string | number;
  liked: boolean;
  likes: number | string;
  token: string;
  img: string;
  active: any,
  playing: any,
  setPlaying: any;
  setActive: any;
  className?: string;
  nftype: string;
  index?: null | number;
}; 

const NFT = ({  
  album,
  artist,
  song,
  platform,
  price,
  liked,
  likes,
  token,
  img,
  active,
  setActive,
  playing,
  setPlaying,
  nftype,
  className = "",
  index,
}) => {
  // const { playing, setPlaying } = useAudioPlayer(100);
  const [isShown, setIsShown] = useState(false)
  const [isLiked, setIsLiked] = useState<boolean>(liked); 

  const ClickHandler =(item: any)=>{ 
    setActive(item)
    setPlaying(prev=> !prev)
  } 

  return (
    <motion.div
      whileHover={{
        scale: 1.02, 
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className={"bg-dark-900 " + className}
      // onMouseOver={() => setPlaying(true)}
      // onMouseOut={() => setPlaying(false)}
      onMouseOver={()=> setIsShown(true)} onMouseOut={()=> setIsShown(false)} 
    >
      <audio id={`audio-${index}`}>
        <source src={"/song.mp3"} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className={nftype === "scroll" ? " w-[200px] h-[200px] relative " : " w-[200px] md:w-full h-[200px] relative "}   > 
        <img src={img} alt="" className={isShown ? " hidden " : " w-full h-full object-cover "} /> 
          <div className={isShown ? " flex w-full h-full justify-center items-center " : " hidden "} > 
          <div className="absolute z-10 inset-0 bg-black opacity-50  " />
          <img src={img} alt="" className=" w-full absolute h-full object-cover " />
              {active === index && (
                <button style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }} className=' w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center ' onClick={() => ClickHandler(index)}>
                  {playing ? (
                      <img
                      src={Pause}
                      alt=""
                      className=" cursor-pointer w-4 h-5"
                      />
                  ) : (
                      <img
                      src={Play}
                      alt="" 
                      className="cursor-pointer  w-4 h-6"
                      />
                  )}
                </button>
              )}
              {active !== index && (
                <button style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }} className=' w-[50px] h-[50px] relative z-20 rounded-full flex justify-center items-center ' onClick={() => ClickHandler(index)}>
                  {/* {playing && 
                    ( */}
                      <img
                      src={Play}
                      alt="" 
                      className="cursor-pointer  w-4 h-6"
                      />
                  {/* )} */}
                </button>
              )}
          </div> 
      </div>
      <div className="bg-dark-700 py-3.5 px-[20px] mb-px">
        <p className="font-normal text-sm text-white mb-3">{album}</p>
        <div className="flex items-center ">
          <img src={Selina} alt="" className="w-4 h-4 rounded-full" />
          <p className="text-muted text-xs font-medium ml-2">{artist}</p>
        </div>
      </div>
      <div className="bg-dark-700 py-3.5 px-[20px]">
        <p className="text-xs font-normal text-muted mb-2">
          Buy from {platform}
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            <span className="mr-2 text-[13px] leading-5 font-semibold text-white">
              {price}
            </span>
            <img src={token} alt="" className="w-3 h-3" />
          </p>

          <p onClick={() => setIsLiked(!isLiked)} className="flex items-center">
            {likes !== 0 && (
              <span className="mr-2 text-[9px] leading-4 font-medium text-muted">
                {likes}
              </span>
            )}
            {isLiked ? (
              <img
                src={HeartFilledIcon}
                alt=""
                className="w-4 h-4 cursor-pointer"
              />
            ) : (
              <img src={HeartIcon} alt="" className="w-4 h-4 cursor-pointer" />
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NFT;
