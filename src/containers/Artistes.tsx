import React, { useEffect } from "react";
import VerifiedBadge from "../assets/icons/verified_badge.svg";

import { getArtists } from "../state/artist/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";

const Artistes = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: AppState) => state.artist.artists);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white text-[17px] leading-7 font-thin md:font-medium mb-7">
        Artistes
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-16">
        {artists.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center mr-4 min-w-full md:min-w-[140px]"
          >
            <Link
              to={`/profile/${_.user.id}`} className="relative">
              <Photo
                alt=""
                className="object-cover h-24 w-24 md:h-32 md:w-32 rounded-full border-[15px] border-dark-700 mb-[18px]"
                style={{
                  border: "10px solid #141922",
                }}
              />
              {_.isVerified && (
                <img
                  src={VerifiedBadge}
                  alt=""
                  className="absolute w-4 md:w-6 h-4 md:h-6 right-3 bottom-6"
                />
              )}
            </Link>
            <Link
              to={`/profile/${_.user.id}`}
              className="font-normal mb-1.5 md:font-bold text-base md:text-base text-white text-center uppercase name-tag"
            >
              ${_.creatorCoinId}
            </Link>
            {/* <p className="text-muted text-xs font-medium md:text-xs md:font-medium text-center">
              474.14 LZR
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artistes;
