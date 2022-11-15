import React, { useState } from "react";
import Goya from "../assets/img/artists/goya.png";
import AT from "../assets/img/artists/at.png";
import SM from "../assets/img/artists/its.png";
import SUA from "../assets/img/artists/tsz20.png";
import Cloud from "../assets/img/artists/cloud.png";
import Nons from "../assets/img/artists/nons.png";
import HB from "../assets/img/artists/hb.png";
import SA from "../assets/img/artists/sua.png";
import Circle from "../assets/img/artists/chilg2.png";
import HeartBleeding from "../assets/img/artists/hbaa.png";
import FNA from "../assets/img/artists/fna.png";
import Monalisa from "../assets/img/artists/suaa.png";
import useAudioPlayer from "../hooks/useAudioPlayer";
import Play from "../components/Play";
import Pause from "../components/Pause";

const tracks = [
  {
    title: "Chiling good",
    artist: "Goya Menor",
    img: Goya,
  },
  {
    title: "First night out ",
    artist: "Andrew Thomas",
    img: AT,
  },
  {
    title: "Heart bleeding ",
    artist: "Sunsha Merit",
    img: SM,
  },
  {
    title: "Stepping up again",
    artist: "Sandra Alex",
    img: SUA,
  },
  {
    title: "Chiling good",
    artist: "Goya Menor",
    img: Cloud,
  },
  {
    title: "First night out",
    artist: "Andrew Thomas",
    img: Nons,
  },
  {
    title: "Heart bleeding",
    artist: "Sunsha Merit",
    img: HB,
  },
  {
    title: "Stepping up again",
    artist: "Sandra Alex",
    img: SA,
  },
  {
    title: "Chilling good",
    artist: "Goya Menor",
    img: Circle,
  },
  {
    title: "First night out",
    artist: "Andrew Thomas",
    img: HeartBleeding,
  },
  {
    title: "First night out",
    artist: "Andrew Thomas",
    img: FNA,
  },
  {
    title: "First night out",
    artist: "Andrew Thomas",
    img: Monalisa,
  },
];

const filters = [
  "Recent",
  "Genre",
  "My Library",
  "Charts",
  "Newly added",
  "Videos",
  "Downloaded",
  "Liked",
  "Country",
  "Mood",
  "Playlists",
  "Albums",
  "EPs",
];

const Tracks = () => {
  const [active, setActive] = useState(filters[0]);
  return (
    <div className="pb-32">
      <div className="w-full overflow-x-auto flex mb-7">
        {filters.map((filter, index) => (
          <div
            key={index}
            onClick={() => setActive(filter)}
            className={`py-[7px] px-6 bg-dark-700 font-normal text-[11.5px] mr-3 min-w-max ${
              active === filter ? "text-white" : "text-muted cursor-pointer"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <p className="text-[17px] leading-7 font-thin md:font-medium text-white mb-6">
        Tracks
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5  gap-y-10">
        {tracks.map((track, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { setPlaying, playing } = useAudioPlayer(index);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [show, setShow] = useState(false);
          return (
            <div key={index}>
              <div
                className="relative"
                onMouseOver={() => {
                  setPlaying(true);
                  setShow(true);
                }}
                onMouseOut={() => {
                  setPlaying(false);
                  setShow(false);
                }}
                onClick={() => setPlaying(!playing)}
              >
                <img src={track.img} alt="" width={"100%"} height={203} />
                <div
                  onMouseOver={() => setShow(true)}
                  onMouseOut={() => setShow(false)}
                  className={`absolute inset-y-[45%] inset-x-[43%] ${
                    !show && "hidden"
                  }`}
                >
                  {playing ? (
                    <Pause handleClick={() => setPlaying(false)} />
                  ) : (
                    <Play handleClick={() => setPlaying(true)} />
                  )}
                </div>
              </div>
              <audio id={`audio-${index}`}>
                <source src={"/song.mp3"} />
                Your browser does not support the <code>audio</code> element.
              </audio>
              <p className="font-normal text-sm mt-3 mb-0.5 text-white">
                {track.title}
              </p>
              <p className="text-muted text-xs font-normal">{track.artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
