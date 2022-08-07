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
      <div className="w-full overflow-x-auto flex mb-12">
        {filters.map((filter, index) => (
          <div
            key={index}
            onClick={() => setActive(filter)}
            className={`py-3.5 px-8 bg-dark-700 font-semibold text-base mr-4 min-w-max ${
              active === filter ? "text-white" : "text-muted cursor-pointer"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <p className="font-bold text-2xl text-white mb-5">Tracks</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5  gap-y-10">
        {tracks.map((track, index) => (
          <div key={index}>
            <img src={track.img} alt="" width={"100%"} height={203} />
            <p className="font-bold text-lg mt-3 mb-[1px] text-white">
              {track.title}
            </p>
            <p className="text-muted font-medium text-sm">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
