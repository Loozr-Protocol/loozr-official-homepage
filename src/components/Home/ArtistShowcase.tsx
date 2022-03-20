import ShowcaseCard from "../ShowcaseCard";
import { Artist } from "../../config/constants/types";
import artistsData from "../../config/mock-data/artists.json";

export default function ArtistShowcase() {
  const artists: Artist[] = artistsData.map((artist) => artist);

  return (
    <>
      <div
        className="views-element-container work-carousel section-padding pt-0 metro position-re mb-80"
        id="block-views-block-nv-section-content-block-service"
      >
        <div className="container">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              FEATURED CREATORS
            </h6>
            <h3 className="wow" data-splitting>
              TOP ARTISTS
            </h3>
            <span className="tbg">TOP ARTISTS</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="container ontop">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {artists.map((artist, index) => (
                    <ShowcaseCard artist={artist} id={index} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}
