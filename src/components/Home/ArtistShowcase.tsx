import ShowcaseCard from "../ShowcaseCard";
import { Artist } from "../../config/constants/types";

export default function ArtistShowcase() {
  const artists: Artist[] = [
    {
      name: "Crowd Kontroller",
      tokenName: "$KONTROLLER",
      isVerified: true,
      coinPrice: "3.7k LZR",
      photo: "/img/gallery/4.png",
    },
    {
      name: "Padre El Ferenco",
      tokenName: "$PADRE",
      isVerified: false,
      coinPrice: "4.63k LZR",
      photo: "/img/gallery/5.png",
    },
    {
      name: "Arlene FL",
      tokenName: "$ARLENE",
      isVerified: false,
      coinPrice: "988.02 LZR",
      photo: "/img/gallery/6.png",
    },
    {
      name: "Molisa Ifagha",
      tokenName: "$MOLISA",
      isVerified: false,
      coinPrice: "1.89k LZR",
      photo: "/img/gallery/7.png",
    },
    {
      name: "King Stunna",
      tokenName: "$STUNNA",
      isVerified: true,
      coinPrice: "2.6k LZR",
      photo: "/img/gallery/8.png",
    },
    {
      name: "Naomi Branch",
      tokenName: "$NAYOMI",
      isVerified: false,
      coinPrice: "970.12 LZR",
      photo: "/img/gallery/9.png",
    },
    {
      name: "Callmhe Mhizjae",
      tokenName: "$MHIZJAE",
      isVerified: false,
      coinPrice: "888.12 LZR",
      photo: "/img/gallery/10.png",
    },
  ];
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
                    <ShowcaseCard artist={artist} key={index} />
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