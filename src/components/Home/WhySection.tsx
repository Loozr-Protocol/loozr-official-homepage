import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react"; 
import {Carousel} from '3d-react-carousal';
import slide1 from "../../assets/img/dashboard-banner.png";
import slide2 from "../../assets/img/slider3.jpg";
import slide3 from "../../assets/img/slider2.jpeg";

export default function WhySection() {
  
  let isHover = 0
  const [tab, setTab] = useState(0) 

  const boxAnimation = {
    key: "box",
    initial: { 
      opacity: 0,
      x: 400
        // scale: 0.5,
    },
    animate: {
        x: 0,
        opacity: 1,
        // scale: 1,
    },
    exit: { 
        opacity: 0,  
        x: -400
        // scale: 0.5,
    },
    transition: {
        duration: 0.5,
        ease: "easeOut",
    },
  }

  let slides = [
    <div className=" w-full flex !bg-[#11151D] rounded-xl flex-col items-center" >  
      <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" px-4 md:pr-14 py-8 pt-4 w-full md:px-12 flex flex-col items-center" >   
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 !text-[#9EAAC0] " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium leading-normal !text-[#9EAAC0] ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div> , 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" px-4 md:pr-14 py-8 pt-4 w-full md:px-12 flex flex-col items-center " >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 !text-[#9EAAC0] " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium leading-normal !text-[#9EAAC0] ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" px-4 md:pr-14 py-8 pt-4 w-full md:px-12 flex flex-col items-center" >  
        <div  className=" relative max-w-3xl z-50 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl txt text-left  ">For Music Creators</p>  
          <div className=" py-2 pt-2 w-full px-1 !text-[#9EAAC0] " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0] " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium leading-normal !text-[#9EAAC0] ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div>, ];



  const [isShown, setIsShown] = React.useState(0)
  const images: any = [ "/img/creator.png", "/img/creator.png", "/img/creator.png" ] 



  React.useEffect(() => { 
    const t1 = setTimeout(() => {  
      if(isShown === images.length-1){ 
        setIsShown(0) 
      } else { 
        setIsShown(prev=>prev+1) 
      }
    }, 3000); 
    return () => { 
      clearTimeout(t1); 
    }
  },[isShown])
  

  const image: any = [ 
    {
      img: "/img/creator.png",
      header: 'For Music Creators',
      list: [
              "Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.",
              "Looking to create and monetize on their terms, free of algorithms, brands, and ads."
            ]
    },  
    {
      img: slide1,
      header: 'Music Creators',
      list: [
              "Introducing revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.",
              "Looking to create on their terms, free of algorithms, brands, and ads."
            ]
    },    
    {
      img: slide3,
      header: 'For Creators',
      list: [
              "Introducing multiple revenue streams for, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.",
              "Looking to monetize on their terms, free of algorithms, brands, and ads."
            ]
    },  
  ]  

  return (
    <>  
      <div className={ " w-full !bg-[#11151D] pt-8 pb-24 flex flex-col "} >
        <div className="w-full flex md:flex-row flex-col items-center relative px-6 md:px-24 ">
          <div className="sec-head custom-font  w-full text-left">
            <h6 id="gradenttext" className=" wow !tracking-[0.4em] fadeIn txt !font-medium !text-[14px]" data-wow-delay=".5s">
              WHO ARE WE BUILDING FOR?
            </h6>
            <p className=" !font-black txt text-left mt-4 !leading-[1.1] text-3xl md:!text-[65px]" data-splitting>
              Empowering <br/>
              Independence.
            </p>
          </div> 
          <div className=" w-full relative md:pt-14 sec-head " > 
            <span className="tbg md:block hidden ">BUILDING</span>
              <p className=" font-normal leading-normal md:mt-0 -mt-10 !text-[#9EAAC0] text-[17px] md:mx-auto txt lg:max-w-md " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
          </div>
        </div>    
        <div className=" w-full md:block hidden lg:w-[80%] -mt-4 " > 
          <Carousel slides={slides} autoplay={true} arrows={false} interval={4000} /> 
        </div> 
        <div className=" px-2 w-full md:hidden " > 
          <div className="w-full relative  " > 
            {image.map((item: any, index: any) => {
                return( 
                  <AnimatePresence key={index} >
                    {index === isShown &&  
                    <> 
                      <motion.div  
                        key={item} {...boxAnimation} className=" w-full flex absolute top-0 !bg-[#11151D] rounded-xl flex-col items-center" >  
                        <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
                        <div className=" px-4 md:pr-14 py-8 pt-4 w-full md:px-12 flex flex-col items-center" >   
                          <div  className=" relative w-full z-50 " > 
                            <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">{item.header}</p>  
                            <div className=" py-2 pt-2 w-full px-1 !text-[#9EAAC0] " >
                              {item.list.map((item: any, index: any) => {
                                return( 
                                  <div key={index} className=" flex mb-2 font-normal leading-normal  " >
                                    <div className=" w-fit " > 
                                      <div className=" w-[4px] h-[4px] mt-[12px]  bg-white rounded-full mr-2 " />
                                    </div>
                                    <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >{item}</p>
                                  </div> 
                                )
                              })}
                            </div> 
                          </div> 
                        </div>
                      </motion.div> 
                        {/* <motion.div  
                          key={item} 
                            className=" w-screen md:w-full  min-h-[210px] absolute inset-x-0 top-0 bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end "
                            style={{ background: `url(${item.img})`, backgroundColor: "#000", backgroundPosition: "cover" }}
                            {...boxAnimation}
                          >
                          <div className=" bg-black bg-opacity-40 z-10 absolute inset-0 " />
                            <p className=" relative z-20 text-white " >
                              <span className="text-loozr-purple relative z-20 font-medium text-[13px]">
                                MUSIC
                              </span>{" "}
                              <span className="text-xs relative z-20">/{item.month}</span>
                            </p>
                            <p className="text-white relative z-20 font-semibold text-[17px] leading-7 max-w-[450px]">
                              {item.details}
                            </p> 
                        </motion.div>    */}
                      </>
                    }
                  </AnimatePresence> 
                )})}  
          </div>
          <div className="w-full relative  " > 
            {image.map((item: any, index: any) => {
                return(  
                  <>
                    {index === isShown &&  
                      <> 
                        <div  
                          key={item} className=" w-full flex !bg-transparent rounded-xl flex-col items-center" >  
                          <div className=" h-[250px] " />
                          <div className=" px-4 md:pr-14 py-8 pt-4 w-full md:px-12 flex flex-col items-center" >   
                            <div  className=" relative w-full z-50 " > 
                              <p className=" font-bold text-2xl text-left !text-transparent ">{item.header}</p>  
                              <div className=" py-2 pt-2 w-full px-1 !text-transparent " >
                                {item.list.map((item: any, index: any) => {
                                  return( 
                                    <div key={index} className=" flex mb-2 font-normal leading-normal  " >
                                      <div className=" w-fit " > 
                                        <div className=" w-[4px] h-[4px] mt-[12px]  bg-transparent rounded-full mr-2 " />
                                      </div>
                                      <p className=" txt font-normal leading-normal !text-transparent    " >{item}</p>
                                    </div> 
                                  )
                                })}
                              </div> 
                            </div> 
                          </div>
                        </div>  
                      </>
                    } 
                  </>
                )})}  
          </div>
        </div>
      </div>
    </>
  );
} 