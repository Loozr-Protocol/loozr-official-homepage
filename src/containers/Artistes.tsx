import React, { useEffect } from "react";
import verified from "../assets/icons/verified.svg"

import { getArtists } from "../state/artist/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { Link, useNavigate } from "react-router-dom";
import Photo from "../components/Photo";

const Artistes = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: AppState) => state.artist.artists);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  console.log(artists);
  
  const [isShownText, setIsShownText] = React.useState(-1)
  const [isShown, setIsShown] = React.useState(-1)
  const navigate = useNavigate() 

  const Checking =(item: any, text: any)=> {
    setIsShown(item)
    if(text.length > 7){
      setIsShownText(item)
    } else {
      setIsShownText(-1)
    }
  }
  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white text-[17px] leading-7 font-thin md:font-medium mb-7">
        Artistes
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-6">
        {artists.map((_, i) => (
          <div
            key={i}
            onMouseOver={()=> Checking(i, _.creatorCoinId)}
            onMouseOut={()=> Checking(-1, _.creatorCoinId)}
            className="flex flex-col items-center mr-4 min-w-full md:min-w-[140px]">
            <Link to={`/${_.user.accountDomain}`} className="relative">
              <Photo
                alt=""
                className="object-cover h-[100px] md:h-[105px] w-[100px] md:w-[105px] rounded-full mb-[16px]"
                style={{
                  border: "10px solid #141922",
                }}
              />
              {_.isVerified && (
                <img src={verified} alt="verified" className=" absolute bottom-1 right-0 w-[28px] " />
              )}
            </Link>

            <div className=" w-[105px] mt-1" > 
              <div className={isShownText === i ? "example1" : " h-[20px] w-full flex justify-center "} >
                <p onClick={()=> navigate(`/${_.user.accountDomain}`)} className=" cursor-pointer mb-[3px] font-medium text-sm text-white"> 
                  ${isShownText === i ?  _.creatorCoinId.toUpperCase() : _.creatorCoinId.slice(0, 7).toUpperCase()}
                </p>
              </div> 
            </div> 
            <p className=" font-medium text-[11.5px] text-[#536079] " >2,474.14 LZR</p> 
            <div className=" w-full px-[2px] flex justify-center " >
              <button onClick={() => navigate(`/artistes/buy/${_.user.id}`)} className={isShown === i ? " bg-[#8369F4] h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] text-[11.5px]  " : "bg-[#141922] text-[11.5px]  h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] "} >Buy coin</button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artistes;
