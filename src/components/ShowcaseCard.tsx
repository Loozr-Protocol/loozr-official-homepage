import React, { useRef } from "react";
import { gsap } from "gsap";

import { Link } from "react-router-dom";
import { Artist } from "../config/constants/types";
import PlayButton from "./Buttons/PlayButton";

interface ShowcaseCardProps {
  artist: Artist;
  id: number;
}

export default function ShowcaseCard({ artist, id }: ShowcaseCardProps) {
  const slideMedia = useRef();

  const onSlideMediaHovered = (event) => {
    gsap.to(slideMedia.current, {
      scaleX: 1.12,
      scaleY: 1.12,
      scaleZ: 1.5,
      duration: 1.5,
    });
  };

  const onSlideMediaHoverOut = (event) => {
    gsap.to(slideMedia.current, {
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      duration: 1.5,
      ease: "ease-in-out",
    });
  };

  const song = artist.songs[0];

  return (
    <div
      className="  wow noraidus fadeInUp"
      data-wow-delay=".3s"
    >
      <div
        className="slide-media"
        onMouseEnter={onSlideMediaHovered}
        onMouseLeave={onSlideMediaHoverOut}
        ref={slideMedia}
      >
        <PlayButton altIcons={true} song={song} />
        <div className="item-img bg-img wow imago">
          <img
            style={{ height: "100%" }}
            src={artist.photo}
            alt={artist.name}
          />
        </div>
      </div>
      <div className="cont slide-media-action">
        <h4 className="d-flex align-items-center">
          <Link to={`/artists/${id}`}>{artist.name} </Link>
          {artist.isVerified ? (
            <img src="/img/check-circle.png" alt="check" />
          ) : null}
        </h4>
        <Link to={`/artists/${id}`}>
          <h3>{artist.tokenName}</h3>
        </Link>
        <div className="buy-section-xml">
          <span>${artist.USDValue} ~ </span>
          &nbsp;
          <Link to={`/artists/${id}`} className="buy-xhn">
            Buy Coin
          </Link>
        </div>
      </div>
    </div>
  );
}
