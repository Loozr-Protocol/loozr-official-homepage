import { Artist } from "../config/constants/types";

interface ShowcaseCardProps {
  artist: Artist;
  id: number;
}

export default function ShowcaseCard({ artist, id }: ShowcaseCardProps) {
  return (
    <div className="swiper-slide">
      <div
        className="d-flex flex-column content wow noraidus fadeInUp"
        data-wow-delay=".3s"
      >
        <div className="slide-media">
          <div
            className="item-img bg-img wow imago"
            data-background={artist.photo}
          ></div>
        </div>
        <div className="cont">
          <h4 className="d-flex align-items-center">
            <span>{artist.name} </span>
            {artist.isVerified ? (
              <img src="/img/check-circle.png" alt="check" />
            ) : null}
          </h4>
          <h3>{artist.tokenName}</h3>
          <div className="buy-section-xml">
            <span>{artist.coinPrice} ~ </span>
            &nbsp;
            <a href={`/artists/${id}`} className="buy-xhn">
              Buy Coin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
