import ShowcaseCard from "../ShowcaseCard";
import { Artist } from "../../config/constants/types";
import artistsData from "../../config/mock-data/artists.json";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ArtistShowcase() {
  const artists: Artist[] = artistsData.map((artist) => artist);

  const getFirstFiveArtists = () => {
    return artists.slice(0, 7);
  }

  return (
    <>
      <div
        className="views-element-container work-carousel !bg-[#11151D] mt-5 section-padding metro position-re mb-80"
        id="block-views-block-nv-section-content-block-service"
      >
        <div className="container !bg-[#11151D]">
          <div className="sec-head custom-font text-center">
            <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
              CREATOR ECOSYSTEM 
            </h6>
            <h3 className="wow !font-black txt !text-white mt-8 !leading-[1.1] !text-[40px] " data-splitting>
              TOP ARTISTES
            </h3>
            <span className="tbg">TOP ARTISTES</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="container !px-0 ontop">
          <div className="">
            <div className=" w-full flex ">
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
                {getFirstFiveArtists().map((artist, index) => (
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
