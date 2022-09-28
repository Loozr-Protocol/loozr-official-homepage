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

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  const renderAudioPlayer = useMemo(() => {
    return (
      <div
        className={`${!canPlay && "hidden"} fixed bottom-6 left-14 rounded-2xl`}
      >
        <audio id={`audio-100`} onCanPlay={() => setCanPlay(true)}>
          <source src={"/song.mp3"} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <div className="flex rounded-2xl">
          <img src={Goya} alt="" className="rounded-l-2xl w-14" />
          <div
            className="py-2 px-3 rounded-r-2xl flex items-center"
            style={{
              background: "rgba(20, 25, 34, 0.65)",
              backdropFilter: "blur(25px)",
            }}
          >
            <div>
              <p className="mb-px font-medium text-[13px] leading-5 text-white">
                Chiling good
              </p>
              <p className="text-muted text-xs font-normal md:font-normal">
                Goya Menor
              </p>
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={(curTime / duration) * 100}
              className="ml-6 mr-8 min-w-[180px]"
            />
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
    <div className="w-full relative">
      <Carousel />
      {renderAudioPlayer}
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-[17px] text-white">
          Featured artistes
        </p>
        <div className="flex items-center">
          <Link to="/artistes" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div>
      </div>
      <div
        id={"carousel"}
        className="max-w-full overflow-auto whitespace-nowrap mb-16"
      >
        <div className="flex">
          {artists.map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center mr-4 min-w-max md:min-w-[145px] relative"
            >
              <div className="relative">
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
              </div>
              <Link
                to={`/profile/${_.user.id}`}
                className="font-normal mb-px md:font-bold text-[15px] text-white text-center uppercase"
              >
                ${_.creatorCoinId}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Suggestion />
      <div className="flex items-center justify-between mb-6">
        <p className="font-medium text-base md:text-[17px] text-white">
          Music NFT drops
        </p>
        <div className="flex items-center">
          <Link to="/nfts" className="text-xs font-medium text-muted">
            View all
          </Link>
        </div>
      </div>
      <div
        // className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-16"
        className="max-w-full overflow-auto whitespace-nowrap mb-16"
      >
        <div className="flex">
          {nfts.map(({ platform, price, liked, likes, token, img }, index) => (
            <NFT
              className="min-w-[200px] mr-[16px]"
              key={index}
              {...{ platform, price, likes, liked, token, img, index }}
            />
          ))}
        </div>
      </div>
      <p className="font-medium text-base md:text-[17px] text-white mb-6">
        How does Loozr work?
      </p>
      <div className="grid gap-5 lg:gap-10 mb-10">
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
