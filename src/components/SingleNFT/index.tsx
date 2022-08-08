import React, { useEffect, useState } from "react";
import Selina from "../../assets/img/nfts/selina.png";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartFilledIcon from "../../assets/icons/heart-filled.svg";

const NFT = ({ platform, price, liked, token, img }) => {
  const [isLiked, setIsLiked] = useState<undefined | boolean>();

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  return (
    <div className="bg-dark-900">
      <img src={img} alt="" height={280} width={280} />
      <div className="bg-dark-700 py-3.5 px-[20px] mb-px">
        <p className="text-lg font-bold text-white mb-3">Happy everyday</p>
        <div className="flex items-center ">
          <img src={Selina} alt="" className="w-4 h-4 rounded-full" />
          <p className="text-muted text-xs font-medium ml-2">Selina Amber</p>
        </div>
      </div>
      <div className="bg-dark-700 py-3.5 px-[20px]">
        <p className="text-xs font-medium text-muted mb-0.5">
          Buy from {platform}
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            <span className="mr-2 text-xl font-bold text-white">{price}</span>
            <img src={token} alt="" className="w-5 h-5" />
          </p>
          <p onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <img
                src={HeartFilledIcon}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
            ) : (
              <img src={HeartIcon} alt="" className="w-6 h-6 cursor-pointer" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFT;
