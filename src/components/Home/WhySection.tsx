import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react"; 
import {Carousel} from '3d-react-carousal';

export default function WhySection() {
  
  let isHover = 0
  const [tab, setTab] = useState(0)

   
  const ref1: any = useRef(null);
  const ref2: any = useRef(null); 

  const isInViewport1 = useIsInViewport(ref1); 

  const isInViewport2 = useIsInViewport(ref2); 

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
  console.log(isInViewport1); 

  let slides = [
    <div className=" w-full flex !bg-[#11151D] rounded-xl flex-col items-center" >  
      <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" pr-14 py-8 pt-4 w-full px-12 flex flex-col items-center" >   
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 text-[#9EAAC0] " >
            <div className=" flex text-white font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div> , 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img ref={ref2} src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" pr-14 py-8 pt-4 w-full px-12 flex flex-col items-center " >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 text-[#9EAAC0] " >
            <div className=" flex text-white font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" pr-14 py-8 pt-4 w-full px-12 flex flex-col items-center" >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl txt text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 text-[#9EAAC0] " >
            <div className=" flex text-white font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div>, ];

  return (
    <>  
      <div className={ " w-full !bg-[#11151D] pt-8 pb-24 flex flex-col "} >
        <div className="w-full flex items-center relative lg:px-24 ">
          <div className="sec-head custom-font  w-full text-left">
            <h6 id="gradenttext" className=" relative !font-normal leading-normal  !text-[15px] " data-wow-delay=".5s">
              WHO ARE WE BUILDING FOR?
            </h6>
            <p className=" !font-black txt !text-white text-left mt-4 !leading-[1.1] !text-[65px]" data-splitting>
              Empowering <br/>
              Independence.
            </p>
          </div> 
          <div className=" w-full relative pt-14 sec-head " > 
            <span className="tbg  ">BUILDING</span>
              <p className=" font-normal leading-normal text-[#9EAAC0] text-[17px] mx-auto txt lg:max-w-md " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
          </div>
        </div>    
        <div className=" w-[80%] -mt-4 " > 
          <Carousel slides={slides} autoplay={true} interval={4000} /> 
        </div>
        {/* <div className=" pt-8 w-full flex flex-col items-center " > 
          {tab === 0 && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}  className=" relative max-w-3xl pt-8 z-50 " > 
              <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
              <div className=" py-2 pt-2 pr-6 px-1 text-[#9EAAC0] " >
                <div className=" flex text-white font-normal leading-normal  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                </div>
                <div className=" flex mt-2  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                </div>
              </div> 
            </motion.div>
          )}
          {tab === 1 && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}  className=" relative max-w-3xl pt-8 z-50 " > 
              <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music</p>  
              <div className=" py-2 pt-2 pr-6 px-1 text-[#9EAAC0] " >
                <div className=" flex text-white font-normal leading-normal  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                </div>
                <div className=" flex mt-2  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                </div>
              </div> 
            </motion.div>
          )}
          {tab === 2 && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}  className=" relative max-w-3xl pt-8 z-50 " > 
              <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
              <div className=" py-2 pt-2 pr-6 px-1 text-[#9EAAC0] " >
                <div className=" flex text-white font-normal leading-normal  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-normal leading-normal   " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
                </div>
                <div className=" flex mt-2  " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
                </div>
              </div> 
            </motion.div>
          )}
        </div> */}
      </div>
    </>
  );
} 