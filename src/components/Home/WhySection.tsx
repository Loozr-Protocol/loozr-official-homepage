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
  

  const callback = function(index: any){   
  }  

  let slides = [
    <div className=" w-full flex !bg-[#0c0f15] flex-col items-center" >  
      <img  src="/img/creator.png" className=" h-[400px] object-cover " alt="1" /> 
      <div className=" py-8 w-full flex flex-col items-center " >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 mt-6 px-1 " >
            <div className=" flex text-white font-medium " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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
    <div className=" w-full flex flex-col !bg-[#0c0f15] items-center" > 
      <img ref={ref2} src="/img/creator.png" className=" h-[400px] object-cover " alt="1" /> 
      <div className=" py-8 w-full flex flex-col items-center " >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 mt-6 px-1 " >
            <div className=" flex text-white font-medium " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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
    <div className=" w-full flex flex-col !bg-[#0c0f15] items-center" > 
      <img  src="/img/creator.png" className=" h-[400px] object-cover " alt="1" />
      <div className=" py-8 w-full flex flex-col items-center " >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 mt-6 px-1 " >
            <div className=" flex text-white font-medium " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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
      <div className={ " w-full !bg-[#0c0f15] pt-24 flex flex-col  h-[100vh] "} >
        <div className="container mb-12 ">
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
        <div className=" w-full  " > 
          <Carousel slides={slides} autoplay={false} onSlideChange={callback}/> 
        </div>
        {/* <div className=" pt-8 w-full flex flex-col items-center " > 
          {tab === 0 && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}  className=" relative max-w-3xl pt-8 z-50 " > 
              <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
              <div className=" py-2 mt-6 px-1 " >
                <div className=" flex text-white font-medium " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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
              <div className=" py-2 mt-6 px-1 " >
                <div className=" flex text-white font-medium " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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
              <div className=" py-2 mt-6 px-1 " >
                <div className=" flex text-white font-medium " >
                  <div className=" w-fit " > 
                    <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                  </div>
                  <p className=" txt font-medium  " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
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