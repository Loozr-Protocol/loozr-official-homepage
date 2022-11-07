import React, { useState, useMemo, useEffect } from "react";
import Arrow from "../assets/Arrow.svg";
import Heart from "../assets/Heart.svg";
import Chart from "../assets/Chart.svg";
import Goya from "../assets/img/artists/goya.png";
import Forward from "../assets/svg/controls/forward.svg";
import Rewind from "../assets/svg/controls/rewind.svg";
import Play from "../assets/svg/controls/play.svg";
import Pause from "../assets/svg/controls/pause.svg";
import Suggestion from "../components/suggestion";
import Carousel from "../components/Carousel";
import VerifiedBadge from "../assets/icons/verified_badge.svg";
import { featured } from "../components/dummy/featuredArtist";
import { Link } from "react-router-dom";
import NFT from "../components/SingleNFT";
import { nfts } from "../components/dummy/nfts";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { getArtists } from "../state/artist/actions";
import Photo from "../components/Photo";
import SlidesButton from "../components/SlidesButton";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#536079",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
}));

const ArtisteDashboard = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: AppState) => state.artist.artists);
  const [canPlay, setCanPlay] = useState(false);
  const { playing, setPlaying, duration, curTime } = useAudioPlayer(100);

  const featuredRef: any = React.useRef(null); 
  const musicDropRef: any = React.useRef(null); 

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  const FeaturedArtistes =()=>{ 

    const [isShown, setIsShown] = React.useState(-1)
    
    return( 
      <> 
        <div className="flex items-center justify-between mb-6"
          >
          <p className="font-medium text-base md:text-[17px] text-white">
            Featured artistes
          </p>
          <SlidesButton position={featuredRef} width={200} />
        </div>
        <div
          id={"carousel"}
          className="max-w-full overflow-auto scroll_event whitespace-nowrap md:mb-0 mb-16"
          ref={featuredRef}
        >
          <div className="flex"  >
            {artists.map((_, i) => (
              <div
                key={i}
                onMouseOver={()=> setIsShown(i)}
                onMouseOut={()=> setIsShown(-1)}
                className="flex flex-col items-center mr-4 md:h-72 min-w-max md:min-w-[145px]"
              >
                <Link to={`/profile/${_.user.id}`} className="relative">
                  <Photo
                    alt=""
                    className="object-cover h-20 md:h-32 w-20 md:w-32 rounded-full border-[15px] border-dark-700 mb-[16px]"
                    style={{
                      border: "14px solid #141922",
                    }}
                  />
                  {_.isVerified && (
                    <img
                      src={VerifiedBadge}
                      alt=""
                      className="absolute w-4 md:w-8 h-4 md:h-8 right-3 bottom-6"
                    />
                  )}
                </Link>
                <Link
                  to={`/profile/${_.user.id}`}
                  className="font-extrabold mb-px md:font-bold text-[15px] text-white text-center uppercase name-tag"
                >
                  ${_.creatorCoinId}
                </Link> 
                <p className=" font-semibold text-[#536079] " >2,474.14 LZR</p> 
                <button className={isShown === i ? " bg-[#141922] h-12 md:flex justify-center items-center font-bold hidden rounded-full w-full mt-4  " : "hidden"} >Buy coin</button> 
              </div>
            ))}
          </div>
        </div>
      </> 
    )
  }

  const renderAudioPlayer = useMemo(() => {
    return (
      <div
        className={`${!canPlay && "hidden"} fixed md:top-auto md:right-auto bottom-20 left-0 right-0 z-50 md:bottom-6 md:left-14 rounded-[13px]`}
      >
        <audio id={`audio-100`} onCanPlay={() => setCanPlay(true)}>
          <source src={"/song.mp3"} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <div className="flex w-full md:w-auto md:h-auto h-[70px] md:rounded-[13px] md:py-0 items-center " 
          style={{
            background: "rgba(20, 25, 34, 0.65)",
            backdropFilter: "blur(12.5px)",
          }}>
            <div className=" w-12 md:w-14 md:ml-0 ml-3 " > 
              <img src={Goya} alt="" className=" rounded-full md:rounded-r-none md:rounded-l-[13px] w-full" />
            </div>
          <div
            className="py-2 px-3 bg-transparent md:w-auto w-full md:rounded-r-[13px] flex items-center"
            style={{  
              // backdropFilter: "blur(12.5px)",
            }}
          >
            <div className=" flex flex-1 md:flex-row flex-col pr-3 md:pr-0 md:items-center " > 
              <div className=" w-fit " >
                <p className="mb-px font-medium text-xs md:text-[13px] leading-5 text-white">
                  Chiling good
                </p>
                <p className="text-muted text-[10px] md:mt-0 -mt-1 md:text-xs font-normal md:font-normal">
                  Goya Menor
                </p>
              </div>
              <div className=" md:flex hidden " >
                <BorderLinearProgress
                  variant="determinate"
                  value={(curTime / duration) * 100}
                  className="ml-6 mr-8 min-w-[180px]"
                />
              </div>
              <div className=" md:hidden flex " >
                <BorderLinearProgress
                  variant="determinate"
                  value={(curTime / duration) * 100}
                  className=" md:hidden mt-2 w-full "
                />
              </div>
            </div>
            <div className="flex items-center mr-3">
              <img src={Rewind} alt="" className="cursor-pointer w-4 h-4" />
              {playing ? (
                <img
                  src={Pause}
                  alt=""
                  onClick={() => setPlaying(false)}
                  className="mx-6 cursor-pointer w-5 h-6"
                />
              ) : (
                <img
                  src={Play}
                  alt=""
                  onClick={() => setPlaying(true)}
                  className="mx-6 cursor-pointer w-5 h-7"
                />
              )}
              <img src={Forward} alt="" className="cursor-pointer w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }, [canPlay, curTime, duration, playing, setPlaying]);

  return (
    <div className="w-full flex flex-col">
      <Carousel />
      {renderAudioPlayer}
      <FeaturedArtistes />
      <Suggestion />
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-[17px] text-white">
          Music NFT drops
        </p>
        {/* <div className="flex items-center">
          <Link to="/nfts" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div> */}
          <SlidesButton position={musicDropRef} width={250} />
      </div>
      <div
        // className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-16"
        className="max-w-full overflow-auto scroll_event whitespace-nowrap mb-16"
        ref={musicDropRef}
      >
        <div className="flex">
          {nfts.map(({ platform, price, liked, likes, token, img }, index) => (
            <NFT
              className="w-[200px] mr-[16px]"
              key={index}
              {...{ platform, price, likes, liked, token, img, index }}
            />
          ))}
        </div>
      </div>
      <p className="font-medium text-base md:text-[17px] text-white mb-6">
        How does Loozr work?
      </p>
      <div className="grid gap-5 lg:gap-10 pb-44 md:pb-28 ">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
          <div className="bg-dark-700 py-7 px-7">
            <img src={Arrow} alt="" className="w-10 h-10 mb-[19px]" />
            <p className="font-medium text-sm text-white mb-2.5">
              Launch Your Own Coin
            </p>
            <p className="text-muted text-xs font-normal">
              Get tokenised by creating your Profile, adding your Songs &
              Playlists, EPs, Albums, etc.
            </p>
          </div>
          <div className="bg-dark-700 py-7 px-7">
            <img src={Chart} alt="" className="w-10 h-10 mb-[19px]" />
            <p className="font-medium text-sm text-white mb-2.5">
              Buy, Sell & Trade
            </p>
            <p className="text-muted text-xs font-normal">
              Fans can stream and trade artiste profiles & songs with Loozr
              coins & explore the Metaverse music world.
            </p>
          </div>
        </div>
        <div className="bg-dark-700 py-7 px-7 md:w-[85%]">
          <img src={Heart} alt="" className="w-10 h-10 mb-[19px]" />
          <p className="font-medium text-sm text-white mb-2.5">
            Collective Wins!
          </p>
          <p className="text-muted text-xs font-normal">
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
