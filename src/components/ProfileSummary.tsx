import { Artist } from "../config/constants/types";

interface ProfileSummaryProps {
  artist: Artist;
}

export default function ProfileSummary({ artist }: ProfileSummaryProps) {
  return (
    <>
      <div className="row mb-30">
        <div className="col-12 col-sm-6 col-sm-6-2">
          <h6>Artist Profile Coin</h6>
          <h3>
            {artist.tokenName}{" "}
            {artist.isVerified ? (
              <img src="/img/check-circle.png" alt="check" />
            ) : null}
          </h3>
          <h5>{artist.name}</h5>
        </div>
        <div className="col-12 col-sm-6 col-sm-6-2 tiny-mt-20">
          <h6>Artist Coin Price</h6>
          <h3>
            {artist.coinPriceFull} <sub className="tiny-txt">LZR</sub>
          </h3>
          <h5>~ ${artist.USDValue}</h5>
        </div>
      </div>
    </>
  );
}
