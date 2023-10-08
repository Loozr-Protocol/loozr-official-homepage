import React, { useEffect } from "react";
import Arrow from "../assets/Arrow.svg";
import Heart from "../assets/Heart.svg";
import Chart from "../assets/Chart.svg";
import Suggestion from "../components/suggestion";
import Carousel from "../components/Carousel";
import VerifiedBadge from "../assets/icons/verified_badge.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { getArtists } from "../state/artist/actions";
import Photo from "../components/Photo";
import SlidesButton from "../components/SlidesButton";
import verified from "../assets/icons/verified.svg"

const ArtisteDashboard = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: AppState) => state?.artist?.artists);
  const featuredRef: any = React.useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getArtists(''));
  }, []);
  
  const FeaturedArtistes =()=>{ 

    const [isShownText, setIsShownText] = React.useState(-1)
    const [isShown, setIsShown] = React.useState(-1)

    const Checking =(item: any, text: any)=> {
      setIsShown(item)
      if(text.length > 7){
        setIsShownText(item)
      } else {
        setIsShownText(-1)
      }
    } 
    
    return (
      <>
        <div className="flex items-center md:px-0 px-6 mt-[3px] justify-between mb-[15px]">
          <p className="txt font-medium text-base md:text-[17px] txt text-white">
            Recent artist coins
          </p>
          <SlidesButton position={featuredRef} width={200} />
        </div>
        <div
          id={"carousel"}
          className="max-w-full md:px-0 px-6 overflow-auto scroll_event whitespace-nowrap md:mb-[2px] mb-16"
          ref={featuredRef}
        >
          <div className="flex ">
            {artists.map((_, i) => (
              <div
                key={i}
                onMouseOver={() => Checking(i, _.creatorCoinId)}
                onMouseOut={() => Checking(-1, _.creatorCoinId)}
                className="flex flex-col items-center mr-[22px] md:h-64 min-w-max md:w-[105px]"
              >
                <Link to={`/${_.user.accountDomain}`} className="relative">
                  <div className=" relative ">
                    <Photo
                      alt=""
                      userId={_.user.accountId}
                      className="object-cover h-[100px] text-4xl md:h-[105px] flex justify-center items-center w-[100px] md:w-[105px] rounded-full  mb-[16px]"
                      style={{
                        border: "8.7px solid #141922",
                      }}
                    />
                    {_.isVerified && (
                      <img
                        src={verified}
                        alt="verified"
                        className=" absolute bottom-1 right-0 w-[28px] "
                      />
                    )}
                  </div>
                  {_.isVerified && (
                    <img
                      src={VerifiedBadge}
                      alt=""
                      className="absolute w-4 md:w-8 h-4 md:h-8 right-3 bottom-6"
                    />
                  )}
                </Link>
                <div className=" w-[105px]">
                  <div
                    className={
                      isShownText === i
                        ? "example1"
                        : " h-[20px] w-full flex justify-center "
                    }
                  >
                    <p
                      onClick={() => navigate(`/${_.user.accountDomain}`)}
                      className=" cursor-pointer mb-[3px] font-medium text-sm text-white"
                    >
                      $
                      {isShownText === i
                        ? _.creatorCoinId.toUpperCase()
                        : _.creatorCoinId.slice(0, 7).toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className=" w-full px-[2px] ">
                  <button
                    onClick={() => navigate(`/artistes/buy/${_.user.id}`)}
                    className={
                      isShown === i
                        ? " bg-[#8369F4] h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] text-[11.5px]  "
                        : "bg-[#141922] text-[11.5px]  h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] "
                    }
                  >
                    Buy coin
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } 

  return (
    <div className=" w-screen md:w-full flex flex-col ">
      <Carousel />  
      <FeaturedArtistes />
      <Suggestion /> 
      <div className=" w-full  md:px-0 px-6 " > 
        <p className="txt font-medium text-base md:text-[17px] text-white mb-6">
          How does Loozr work?
        </p>
        <div className="grid gap-5 lg:gap-10 pb-44 md:pb-28 ">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
            <div className="bg-dark-700 py-7 px-7">
              <img src={Arrow} alt="" className="w-10 h-10 mb-[19px]" />
              <p className="txt font-medium text-sm text-white mb-2.5">
                Launch Your Own Coin
              </p>
              <p className="txt text-muted text-xs font-normal">
                Get tokenised by creating your Profile, adding your Songs &
                Playlists, EPs, Albums, etc.
              </p>
            </div>
            <div className="bg-dark-700 py-7 px-7">
              <img src={Chart} alt="" className="w-10 h-10 mb-[19px]" />
              <p className="txt font-medium text-sm text-white mb-2.5">
                Buy, Sell & Trade
              </p>
              <p className="txt text-muted text-xs font-normal">
                Fans can stream and trade artiste profiles & songs with Loozr
                coins & explore the Metaverse music world.
              </p>
            </div>
          </div>
          <div className="bg-dark-700 py-7 px-7 md:w-full">
            <img src={Heart} alt="" className="w-10 h-10 mb-[19px]" />
            <p className="txt font-medium text-sm text-white mb-2.5">
              Collective Wins!
            </p>
            <p className="txt text-muted text-xs font-normal">
              When fans invest in a token, like Bitcoin, the price of that token
              price rises. Artistes receive a percentage incentive from these
              trades in addition to their streaming money which they split with
              their token holders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisteDashboard;
