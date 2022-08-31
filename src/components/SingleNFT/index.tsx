import React, { useState } from "react";
import Selina from "../../assets/img/nfts/selina.png";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartFilledIcon from "../../assets/icons/heart-filled.svg";
import useAudioPlayer from "../../hooks/useAudioPlayer";

type NFTProp = {
  platform: string;
  price: string | number;
  liked: boolean;
  likes: number | string;
  token: string;
  img: string;
  className?: string;
  index?: null | number;
};

const NFT = ({
  platform,
  price,
  liked,
  likes,
  token,
  img,
  className = "",
  index = null,
}) => {
  const { setPlaying } = useAudioPlayer(index);
  const [isLiked, setIsLiked] = useState<boolean>(liked);

  return (
    <div
      className={"bg-dark-900 " + className}
      onMouseOver={() => setPlaying(true)}
      onMouseOut={() => setPlaying(false)}
    >
      <audio id={`audio-${index}`}>
        <source src={"/song.mp3"} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <img src={img} alt="" height={280} width={280} />
      <div className="bg-dark-700 py-3.5 px-[20px] mb-px">
        <p className="font-normal text-sm text-white mb-3">Happy everyday</p>
        <div className="flex items-center ">
          <img src={Selina} alt="" className="w-4 h-4 rounded-full" />
          <p className="text-muted text-xs font-medium ml-2">Selina Amber</p>
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
    </div>
  );
};

export default NFT;
