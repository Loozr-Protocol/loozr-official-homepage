import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react"; 
import {Carousel} from '3d-react-carousal';
import slide1 from "../../assets/img/dashboard-banner.png";
import slide2 from "../../assets/img/slider3.jpg";
import slide3 from "../../assets/img/slider2.jpeg";

export default function WhySection() {
  
  let isHover = 0
  const [tab, setTab] = useState(0)  

  let slides = [
    <div className=" w-full flex !bg-[#11151D] rounded-xl flex-col items-center" >  
      <img  src="/img/creator.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col " >   
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Content Creators</p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 tracking-[0.4px] !text-[#9EAAC0] " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Introducing multiple revenue streams for creators, access to a direct source of startup funding from their following, which can be used for production costs, touring, branding, etc.</p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium leading-normal !text-[#9EAAC0] ">Looking to create and monetize on their terms, free of algorithms, brands, and ads.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div> , 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/1.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Music Creators</p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div> 
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Earn, grow, and connect with your fans directly, </p>
            </div>
            <div className=" flex mt-2  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-medium leading-normal !text-[#9EAAC0] ">Launch your own music coin and independent economy.</p>
            </div>
          </div> 
        </div> 
      </div>
    </div>,
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/2.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Fans/Listeners</p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Launch your own music coin and independent economy.</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/3.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Record Labels</p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >More freedom as a result of having access to a global catalog of artists to openly and seamlessly promote, invest in, support, and profit from while relaxing in your bathtub.</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/4.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Podcasters/Spacehosts</p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Monetize your Podcast, audio events, comedy and incentivize your community.</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/5.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Small Businesses </p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Passion is the new currency; begin accepting creator tokens with lightning-fast transaction speed.</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/6.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Events & Ticketing </p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >From investible live performances to verifiable and token-gated events.</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>, 
    <div className=" w-full flex flex-col !bg-[#11151D] rounded-xl items-center" > 
      <img src="/img/slider/7.png" className=" h-[250px] rounded-t-xl object-cover " alt="1" />
      <div className=" w-full flex flex-col  " >  
        <div  className=" relative max-w-3xl z-50 md:!pl-12 md:pr-14 px-4 py-8 pt-4 " > 
          <p  id="gradenttext"  className=" font-bold text-2xl text-left  ">For Publishers/Distributors </p>  
          <div className=" py-2 h-[150px] rounded-b-xl pt-2 w-full px-1 !text-[#9EAAC0] tracking-[0.4px]  " >
            <div className=" flex font-normal leading-normal  " >
              <div className=" w-fit " > 
                <div className=" w-[4px] h-[4px] mt-[8px]  bg-white rounded-full mr-2 " />
              </div>
              <p className=" txt font-normal leading-normal !text-[#9EAAC0]    " >Creators distribute music on-chain globally (over 220+ stores) without giving up ownership of their music or control of their careers -keep 100% royalties!</p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>,   ];
 

  return (
    <>  
      <div className={ " w-full !bg-[#11151D] pt-8 pb-24 hidden md:flex flex-col "} >
        <div className="w-full flex lg:flex-row flex-col items-center relative px-6 md:px-24 ">
          <div className="sec-head custom-font  w-full text-left">
            <h6 id="gradenttext" className=" wow !tracking-[0.4em] fadeIn txt !font-medium !text-[14px]" data-wow-delay=".5s">
              WHO ARE WE BUILDING FOR?
            </h6>
            <p className=" !font-black txt text-left mt-4 !leading-[1.1] !text-white text-3xl md:!text-[65px]" data-splitting>
              Empowering <br/>
              Independence.
            </p> 
          </div> 
          <div className=" w-full  lg:pt-14 sec-head custom-font " > 
            <span className="tbg ">BUILDING</span>
              <p className=" font-normal leading-normal tracking-[0.4px] md:mt-0 -mt-10 !text-[#9EAAC0] text-[17px] md:mx-auto txt lg:max-w-md " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
          </div>
        </div>    
        <div className=" w-full md:block hidden lg:w-[80%] -mt-4 " > 
          <Carousel slides={slides} autoplay={true}  interval={4000} /> 
        </div>  
      </div>
    </>
  );
} 