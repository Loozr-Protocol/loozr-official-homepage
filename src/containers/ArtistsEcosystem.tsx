import ShowcaseCard from "../components/ShowcaseCard";
import { Artist } from "../config/constants/types";
import artistsData from "../config/mock-data/artists.json";

export default function ArtistEcosystem() {
  const artists: Artist[] = artistsData.map((artist) => artist);
  const paddingStyle = {
    "paddingTop": "15px",
    "paddingBottom": "15px",
  }
  return (
    <>
      <div className="main-content">
        <div>
          <div
            id="block-nvblockaboutindex"
            className="section-padding mt-30 work-carousel"
          >
            <div className="container">
              <div className="sec-head custom-font text-center mb-10">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  CREATOR ECOSYSTEM
                </h6>
                <h3 className="wow" data-splitting>
                  TOP ARTISTES
                </h3>
                <span className="tbg">TOP ARTISTES</span>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="container">
              <div className="col-md-6 mx-auto">
                <p className="text-center">
                  Here are some of the musicians and creators who have
                  contributed to our early and ongoing development phase. Loozr
                  is enabling independent digital economies to be built by
                  artistes and their communities.
                </p>
              </div>
            </div>
            <div className="container mt-60">
              <div className="d-flex flex-wrap">
                {artists.map((artist, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3"
                    style={paddingStyle}
                  >
                    <ShowcaseCard artist={artist} id={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}
