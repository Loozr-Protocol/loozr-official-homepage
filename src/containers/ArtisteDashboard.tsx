import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { getArtists } from "../state/artist/actions";
import Photo from "../components/Photo";
import verified from "../assets/icons/verified.svg"
import FeedsCard from "./FeedsCard";

const ArtisteDashboard = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: AppState) => state?.artist?.artists);
  const featuredRef: any = React.useRef(null);
  // console.log(artists);


  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getArtists(''));
  }, [dispatch]);

  const FeaturedArtistes = () => {

    const [isShownText, setIsShownText] = React.useState(-1)
    const [isShown, setIsShown] = React.useState(-1)
    const [isHover, setIsHover] = React.useState(false)
    const [hoverStates, setHoverStates] = React.useState({});

    const Checking = (item: any, text: any) => {
      setIsShown(item)
      if (text.length > 7) {
        setIsShownText(item)
      } else {
        setIsShownText(-1)
      }
    }
    const handleMouseEnter = (index) => {
      setHoverStates(prevStates => ({ ...prevStates, [index]: true }));
      setIsHover(true);
    };

    const handleMouseLeave = (index) => {
      setHoverStates(prevStates => ({ ...prevStates, [index]: false }));
      setIsHover(false);
    };

    return (
      <>
        <div className="flex items-center md:px-0 mt-[3px] justify-between mb-[14px] mx-[16px] md:mx-0">
          <p className="txt font-medium text-base md:text-[17px] text-white">
            Latest Artist Coins
          </p>
          <p className="font-light text-xs text-muted">
            View more
          </p>
          {/* <SlidesButton position={featuredRef} width={200} /> */}
        </div>
        <div
          id={"carousel"}
          className="max-w-full md:px-0 px-0 md:px-6 overflow-auto scroll_event whitespace-nowrap md:mb-[2px] mb-2"
          ref={featuredRef}
        >
          <div className="flex ">
            {artists.map((_, i) => (
              <div key={i} onMouseOver={() => Checking(i, _.creatorCoinId)} onMouseOut={() => Checking(-1, _.creatorCoinId)} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)} className="relative flex flex-col items-center mr-[22px] md:h-fit min-w-max md:w-[105px]" >
                <Link to={`/${_.user.accountDomain}`} className="relative">
                  <div className=" relative ">
                    <Photo alt="" userId={_.user.accountId} className="object-cover h-[100px] text-4xl md:h-[105px] flex justify-center items-center w-[100px] md:w-[105px] rounded-full  mb-[16px]"
                      style={{
                        border: "8.7px solid #141922",
                      }} />
                    {_.isVerified && (
                      <img src={verified} alt="verified" className=" absolute bottom-1 right-0 w-[32px] " />
                    )}
                  </div>
                </Link>
                <div className=" w-[105px]">
                  <div className={isShownText === i ? "example1" : " h-[20px] w-full flex justify-center "}>
                    <p onClick={() => navigate(`/${_.user.accountDomain}`)} className=" cursor-pointer mb-[3px] font-medium text-sm text-white" >
                      $ {isShownText === i
                        ? _.creatorCoinId.toUpperCase()
                        : _.creatorCoinId.slice(0, 7).toUpperCase()}
                    </p>
                  </div>
                </div>
                {/* <div className=" w-full px-[2px] ">
                  <button onClick={() => navigate(`/artistes/buy/${_.user.id}`)}
                    className={isShown === i
                      ? " bg-[#8369F4] h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] text-[11.5px]  "
                      : "bg-[#141922] text-[11.5px]  h-[35px] md:flex justify-center items-center font-medium hidden rounded-full w-[105px] mt-[12px] "
                    } >
                    Buy coin
                  </button>
                </div> */}
                {hoverStates[i] && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-dark-700/20 backdrop-blur-sm">
                      <div onClick={() => navigate(`/artistes/buy/${_.user.id}`)} className="cursor-pointer bg-s-gradient px-[12px] py-[7px] rounded-full text-[12px]">Buy coin</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full mb-[43px]  md:mb-0 flex flex-col ">
      <Carousel />
      <FeaturedArtistes />
      <div className="h-px w-full lg:w-full bg-muted-50 mt-4 mb-3 mx-[8px] md:mx-0" />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
      <FeedsCard />
    </div>
  );
};

export default ArtisteDashboard;
