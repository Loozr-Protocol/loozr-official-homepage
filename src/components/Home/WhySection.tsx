import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Mousewheel, Pagination } from "swiper";
export default function WhySection() {

  const [isHover, setIsHover] = React.useState(0)
  const el: any = document.querySelector('html'); 
  const ref1: any = useRef(null);
  const ref2: any = useRef(null); 

  const isInViewport1 = useIsInViewport(ref1);
  // console.log('isInViewport1: ', isInViewport1);

  const isInViewport2 = useIsInViewport(ref2);
  // console.log('isInViewport2: ', isInViewport2); 

    function useIsInViewport(ref: any) {
      const [isIntersecting, setIsIntersecting] = useState(false);

      const observer = useMemo(
        () =>
          new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting),
          ),
        [],
      ); 

      useEffect(() => {
        if(ref?.current) { 
          observer?.observe(ref?.current);
        }  
        return () => {
          observer.disconnect();
        };
      }, [ref, observer]); 

      return isIntersecting;
    }  
    
    useEffect(()=> {   
      if(isInViewport1 || isInViewport2){ 
          el.style.overflow = 'hidden';
          console.log("working"); 
          } else {
          el.style.overflow = 'auto';
        } 
      // return () => clearTimeout(timer);
    },)

  return (
    <>  
      <div className={(isInViewport1 || isInViewport2 )? " w-full fixed z-[200] inset-0 !bg-[#0c0f15] pt-24  h-[100vh] ": " w-full !bg-[#0c0f15] pt-24  h-[100vh] "} >
        <div className="container ">
          <div className="sec-head custom-font text-center">
            <h6 id="gradenttext" className=" leading-[1.8] relative  !font-medium !text-[15px] " data-wow-delay=".5s">
              WHO ARE WE
            </h6>
            <h3 className=" !font-bold !text-white mt-8 !leading-[1.1] !text-4xl" data-splitting>
              BUILDING FOR?
            </h3>
            <span className="tbg">BUILDING FOR?</span>
          </div>
          <p className=" font-medium text-center -mt-14 mx-auto text-white lg:max-w-2xl " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
        </div>   
        <Swiper
          className=" h-[70%] w-full max-w-[100vw]  flex items-center  overflow-hidden  "
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
            <div className=" w-full h-full flex flex-col items-center justify-center  " > 
              <div id="slides">
                <ul className="roller">
                  <li className=" " >
                    <div className=" bg-black absolute inset-0 bg-opacity-50 " />
                    <img alt="" className=" h-full object-cover " src="/img/creator.png" /></li> 
                </ul>
              </div>  
              <div className=" relative max-w-3xl pt-12 z-50 " > 
                <p className=" font-bold  text-5xl text-center mt-12 text-[#8369F4] ">For Music Creators</p>  
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}  className=" py-2 mt-6 px-1 " >
                  <div className=" flex text-white font-medium " >
                    <div className=" w-fit " > 
                      <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                    </div>
                    <p className=" txt font-medium text-xl  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                  </div>
                  <div className=" flex mt-2  " >
                    <div className=" w-fit " > 
                      <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                    </div>
                    <p className=" txt font-medium text-xl ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                  </div>
                </motion.div> 
              </div>
            </div> 
          </SwiperSlide> 
            <SwiperSlide> 
              <div ref={ref1} className=" w-full h-full flex flex-col items-center justify-center  " >  
                <div id="slides">
                  <ul className="roller">
                    <li className=" " >
                      <div className=" bg-black absolute inset-0 bg-opacity-50 " />
                      <img alt="" className=" h-full object-cover " src="/img/creator.png" /></li> 
                  </ul>
                </div>  
                <div className=" relative max-w-3xl pt-12 z-50 " > 
                  <p className=" font-bold  text-5xl text-center mt-12 text-[#8369F4] ">Music Creators</p>  
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}  className=" py-2 mt-6 px-1 " >
                    <div className=" flex text-white font-medium " >
                      <div className=" w-fit " > 
                        <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                      </div>
                      <p className=" txt font-medium text-xl  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                    </div>
                    <div className=" flex mt-2  " >
                      <div className=" w-fit " > 
                        <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                      </div>
                      <p className=" txt font-medium text-xl ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                    </div>
                  </motion.div> 
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide> 
              <div ref={ref2} className=" w-full h-full flex flex-col items-center justify-center  " >  
                <div id="slides">
                  <ul className="roller">
                    <li className=" " >
                      <div className=" bg-black absolute inset-0 bg-opacity-50 " />
                      <img alt="" className=" h-full object-cover " src="/img/creator.png" /></li> 
                  </ul>
                </div>  
                <div className=" relative max-w-3xl pt-12 z-50 " > 
                  <p className=" font-bold  text-5xl text-center mt-12 text-[#8369F4] ">Music Creators</p>  
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}  className=" py-2 mt-6 px-1 " >
                    <div className=" flex text-white font-medium " >
                      <div className=" w-fit " > 
                        <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                      </div>
                      <p className=" txt font-medium text-xl  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                    </div>
                    <div className=" flex mt-2  " >
                      <div className=" w-fit " > 
                        <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                      </div>
                      <p className=" txt font-medium text-xl ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                    </div>
                  </motion.div> 
                </div>
              </div>
            </SwiperSlide> 
          <SwiperSlide> 
            <div className=" w-full h-full flex flex-col items-center justify-center  " > 
              <div id="slides">
                <ul className="roller">
                  <li className=" " >
                    <div className=" bg-black absolute inset-0 bg-opacity-50 " />
                    <img alt="" className=" h-full object-cover " src="/img/creator.png" /></li> 
                </ul>
              </div>  
              <div className=" relative max-w-3xl pt-12 z-50 " > 
                <p className=" font-bold  text-5xl text-center mt-12 text-[#8369F4] ">Music Creators</p>  
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}  className=" py-2 mt-6 px-1 " >
                  <div className=" flex text-white font-medium " >
                    <div className=" w-fit " > 
                      <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                    </div>
                    <p className=" txt font-medium text-xl  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                  </div>
                  <div className=" flex mt-2  " >
                    <div className=" w-fit " > 
                      <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                    </div>
                    <p className=" txt font-medium text-xl ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                  </div>
                </motion.div> 
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