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
import { Link } from "react-router-dom";
import NFT from "../components/SingleNFT";
import { nfts } from "../components/dummy/nfts";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { getArtists } from "../state/artist/actions";
import Photo from "../components/Photo";
import SlidesButton from "../components/SlidesButton";
import verified from "../assets/icons/verified.svg"

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
  const artists = useSelector((state: AppState) => state?.artist?.artists);
  const [canPlay, setCanPlay] = useState(false);
  const { playing, setPlaying, duration, curTime } = useAudioPlayer(100);
  const featuredRef: any = React.useRef(null); 
  const musicDropRef: any = React.useRef(null); 

  const navigate = useNavigate()
  const [active, setActive] = React.useState(null)

  const nftype = "scroll"

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
          <p className="font-medium text-base md:text-[17px] text-white">
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
                      userId={_.user.email}
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

  const[music, setMusic] = React.useState("/song.mp3")
  const[loading, setLoading] = React.useState(false) 

  React.useEffect(() => {
    
    setLoading(true)
    if(active){ 
      setMusic(nfts[active].song)
    }
    const t1 = setTimeout(() => {   
      setLoading(false)
      clearTimeout(t1); 
    }, 2000);
    // return () => {
    //   clearTimeout(t1); 
    // }
  }, [active]) 
   
  const ClickHandler =()=>{
    sessionStorage.setItem("music", active)
    navigate("/artists/music-info")
  }
  
  const renderAudioPlayer = useMemo(() => {
    return (
      <div
        className={`${!canPlay && "hidden"} fixed md:top-auto md:right-auto bottom-20 left-0 right-0 z-50 md:bottom-6 md:left-14 rounded-[13px]`} >   
          <audio id={`audio-100`} onCanPlay={() => setCanPlay(true)}>
            <source src={music} />
            Your browser does not support the <code>audio</code> element.
          </audio>   
        <div className="flex w-full md:w-auto md:h-auto h-[70px] md:rounded-[13px] md:py-0 items-center " 
          style={{
            background: "rgba(20, 25, 34, 0.65)",
            backdropFilter: "blur(12.5px)",
          }}>
            <div className=" w-12 md:w-14 md:ml-0 ml-3 " > 
              <img src={!active ? Goya: nfts[active].img} alt="" className=" rounded-full md:rounded-r-none md:rounded-l-[13px] w-full" />
            </div>
          <div
            className="py-2 px-3 bg-transparent md:w-auto w-full md:rounded-r-[13px] flex items-center"
            style={{  
              // backdropFilter: "blur(12.5px)",
            }}
          >
            <div className=" flex flex-1 md:flex-row flex-col pr-3 md:pr-0 md:items-center " >  
              <button onClick={()=> ClickHandler()} className=" w-fit " >
                <p className="mb-px font-medium text-xs md:text-[13px] leading-5 text-white">
                  {!active ? "Chiling good" : nfts[active].album}
                </p>
                <p className="text-muted text-[10px] md:mt-0 -mt-1 md:text-xs font-normal md:font-normal">
                  {!active ? "Goya Menor" : nfts[active].album}   
                </p>
              </button> 
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
                {/* <MusicInfo play={setIsPlaying} song={"/song.mp3"}/> */}
              <div> 
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
    <div className=" w-screen md:w-full flex flex-col ">
      <Carousel />  
      {renderAudioPlayer}  
      <FeaturedArtistes />
      <Suggestion /> 
      <div className=" w-full  md:px-0 px-6 " > 
        <div className="flex items-center justify-between pb-2 ">
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
          className="max-w-full overflow-auto scroll_event whitespace-nowrap pb-16"
          ref={musicDropRef}
        >
          <div className="flex h-full py-3 ">
            {nfts.map(({ album, artist, song, platform, price, liked, likes, token, img }, index) => (
              <NFT
                className="w-[200px] mr-[16px]"
                key={index}
                {...{ album, artist, song, platform, price, likes, liked, token, img, active, setActive, playing, setPlaying,  index, nftype }}
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
    </div>
  );
};

export default ArtisteDashboard;
