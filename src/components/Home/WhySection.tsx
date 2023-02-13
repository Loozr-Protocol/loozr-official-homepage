import { motion } from "framer-motion";
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Mousewheel, Pagination } from "swiper";
export default function WhySection() {

  const [isHover, setIsHover] = React.useState(0)

  return (
    <>  
      <div className=" w-full h-[100vh] " >
        <Swiper
          className=" h-[100vh] w-full max-w-[100vw]  flex items-center  overflow-hidden  "
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          pagination={{
            el: 'w-3 h-3 rounded-full bg-white', 
          }}
          modules={[Mousewheel, Pagination]}
        > 
          <SwiperSlide>

            <div className="container">
              <div className="sec-head custom-font text-center">
                <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
                  WHO ARE WE
                </h6>
                <h3 className="wow !font-bold !text-white mt-8 !leading-[1.1] !text-4xl" data-splitting>
                  BUILDING FOR?
                </h3>
                <span className="tbg">BUILDING FOR?</span>
              </div>
              <p className=" font-medium text-center -mt-14 mb-10 mx-auto text-white lg:max-w-2xl " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
            </div> 
            <div className=" w-full flex items-center " >
              <div className=" w-full overflow-y-auto max-h-[47vh] pr-6 pl-14 " > 
                <div  className=" flex h-auto " > 
                  {/* <div className=" w-fit flex  flex-col pr-2 " >
                    <div className=" w-[10px] h-[10px] rounded-full bg-[#8369F4] " />
                    <div className=" w-[3px] h-full mx-auto  bg-[#8369F4] " />
                  </div> */}
                  <div className=" w-auto py-4" > 
                    <p className=" font-bold  text-2xl text-[#8369F4] ">For Content Creators</p> 
                      <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}  className=" py-2 px-1 " >
                        <div className=" flex text-white font-medium " >
                          <div className=" w-fit " > 
                            <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                          </div>
                          <p>Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                        </div>
                        <div className=" flex mt-2  " >
                          <div className=" w-fit " > 
                            <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                          </div>
                          <p>Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                        </div>
                      </motion.div>  
                  </div>
                </div>
              </div>
              <div className=" w-full pr-14 pl-6 " >
                <img alt="" src="/img/creator.png" />
              </div>
            </div>   
            </SwiperSlide>
          <SwiperSlide> 
            <div className="container">
              <div className="sec-head custom-font text-center">
                <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
                  WHO ARE WE
                </h6>
                <h3 className="wow !font-bold !text-white mt-8 !leading-[1.1] !text-4xl" data-splitting>
                  BUILDING FOR?
                </h3>
                <span className="tbg">BUILDING FOR?</span>
              </div>
              <p className=" font-medium text-center -mt-14 mb-10 mx-auto text-white lg:max-w-2xl " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
            </div> 
            <div className=" w-full flex items-center " >
              <div className=" w-full overflow-y-auto max-h-[47vh] pr-6 pl-14 " > 
                <div  className=" flex h-auto " > 
                  <div className=" w-fit flex  flex-col pr-2 " >
                    <div className=" w-[10px] h-[10px] rounded-full bg-[#8369F4] " />
                    <div className=" w-[3px] h-full mx-auto  bg-[#8369F4] " />
                  </div>
                  <div className=" w-auto py-4" > 
                    <p className=" font-bold  text-2xl text-[#8369F4] ">For Music Creators</p> 
                      <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}  className=" py-2 px-1 " >
                        <div className=" flex text-white font-medium " >
                          <div className=" w-fit " > 
                            <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                          </div>
                          <p>Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                        </div>
                        <div className=" flex mt-2  " >
                          <div className=" w-fit " > 
                            <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                          </div>
                          <p>Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                        </div>
                      </motion.div>  
                  </div>
                </div>
              </div>
              <div className=" w-full pr-14 pl-6 " >
                <img alt="" src="/img/creator.png" />
              </div>
            </div>  
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}


{/* <div onMouseOver={()=> setIsHover(1)} className=" flex h-auto " > 
<div className=" w-fit flex  flex-col pr-2 " >
  <div className={isHover === 1 ? " w-[10px] h-[10px] rounded-full bg-[#8369F4] ": " w-[10px] h-[10px] rounded-full bg-[#536079] "} />
  <div className={isHover === 1 ? " w-[3px] h-full mx-auto  bg-[#8369F4] ":" w-[3px] h-full mx-auto  bg-[#536079] "} />
</div>
<div className=" w-auto py-3  " > 
  <p className={isHover === 1 ? " font-bold  text-2xl text-[#8369F4] " : " font-bold  text-2xl text-[#536079] "}  >For Music Creators</p>
  {isHover === 1 && (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}  className=" py-2 px-1 " >
      <div className=" flex text-white font-medium " >
        <div className=" w-fit " > 
          <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
        </div>
        <p>Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
      </div>
      <div className=" flex mt-2  " >
        <div className=" w-fit " > 
          <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
        </div>
        <p>Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
      </div>
    </motion.div> 
  )}
</div>
</div>
<div onMouseOver={()=> setIsHover(2)} className=" flex h-auto  " > 
<div className=" w-fit flex  flex-col pr-2 " >
  <div className={isHover === 2 ? " w-[10px] h-[10px] rounded-full bg-[#8369F4] ": " w-[10px] h-[10px] rounded-full bg-[#536079] "} />
  <div className={isHover === 2 ? " w-[3px] h-full mx-auto  bg-[#8369F4] ":" w-[3px] h-full mx-auto  bg-[#536079] "} />
</div>
<div className=" w-auto py-3 " > 
  <p className={isHover === 2 ? " font-bold  text-2xl text-[#8369F4] " : " font-bold  text-2xl text-[#536079] "}  >For Music Creators</p>
  {isHover === 2 && (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}  className=" py-2 px-1 " >
      <div className=" flex text-white font-medium " >
        <div className=" w-fit " > 
          <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
        </div>
        <p>Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
      </div>
      <div className=" flex mt-2  " >
        <div className=" w-fit " > 
          <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
        </div>
        <p>Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
      </div>
    </motion.div> 
  )}
</div>
</div> */}