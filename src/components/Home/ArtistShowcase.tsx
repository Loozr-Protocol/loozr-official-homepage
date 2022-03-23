import ShowcaseCard from "../ShowcaseCard";
import { Artist } from "../../config/constants/types";
import artistsData from "../../config/mock-data/artists.json";
import { Swiper, SwiperSlide } from "swiper/react";

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
              <Swiper
                autoplay={{ delay: 5000 }}
                loop={true}
                speed={1000}
                spaceBetween={0}
                slidesPerView={2}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  901: {
                    slidesPerView: 3.4,
                    spaceBetween: 0,
                  },
                  920: {
                    slidesPerView: 4.5,
                    spaceBetween: 0,
                  },
                  1200: {
                    slidesPerView: 4.5,
                    spaceBetween: 0,
                  },
                }}
              >
                {artists.map((artist, index) => (
                  <SwiperSlide key={index}>
                    <ShowcaseCard artist={artist} id={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}
