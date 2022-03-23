import { Link } from "react-router-dom";
import { Artist } from "../config/constants/types";

interface ShowcaseCardProps {
  artist: Artist;
  id: number;
}

export default function ShowcaseCard({ artist, id }: ShowcaseCardProps) {
  return (
    <div
      className="d-flex flex-column content wow noraidus fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="slide-media">
        <div className="item-img bg-img wow imago">
          <img src={artist.photo} alt={artist.name}/>
        </div>
      </div>
      <div className="cont">
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
          <span>{artist.coinPrice} ~ </span>
          &nbsp;
          <Link to={`/artists/${id}`} className="buy-xhn">
            Buy Coin
          </Link>
        </div>
      </div>
    </div>
  );
}
