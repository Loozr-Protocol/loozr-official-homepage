import { motion } from "framer-motion";
import React from "react";

export default function WhySection() {

  const [isHover, setIsHover] = React.useState(0)

  return (
    <>
      <div
        className="views-element-container px-20 services"
        id="block-views-block-nv-section-content-block-service"
      >
        <div className="container">
          <div className="sec-head custom-font text-center">
            <h6 id="gradenttext" className="wow fadeIn !font-bold " data-wow-delay=".5s">
              WHO ARE WE
            </h6>
            <h3 className="wow" data-splitting>
              BUILDING FOR?
            </h3>
            <span className="tbg">BUILDING FOR?</span>
          </div>
          <p className=" font-medium text-center -mt-14 mb-10 mx-auto text-white lg:max-w-2xl " >Open web democratizing music industry participation, investible talents, community-driven ownership, better monetization, incentivized social interactions, and growth.</p>
        </div>
        <div className="clearfix"></div>
        <div className=" w-full flex items-center " >
          <div className=" w-full overflow-y-auto max-h-[47vh] pr-6 pl-14 " > 
            <div onMouseOver={()=> setIsHover(0)} className=" flex h-auto " > 
              <div className=" w-fit flex  flex-col pr-2 " >
                <div className={isHover === 0 ? " w-[10px] h-[10px] rounded-full bg-[#8369F4] ": " w-[10px] h-[10px] rounded-full bg-[#536079] "} />
                <div className={isHover === 0 ? " w-[3px] h-full mx-auto  bg-[#8369F4] ":" w-[3px] h-full mx-auto  bg-[#536079] "} />
              </div>
              <div className=" w-auto py-4" > 
                <p className={isHover === 0 ? " font-bold  text-2xl text-[#8369F4] " : " font-bold  text-2xl text-[#536079] "} >For Content Creators</p>
                {isHover === 0 && (
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
            <div onMouseOver={()=> setIsHover(1)} className=" flex h-auto " > 
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
            </div>
          </div>
          <div className=" w-full pr-14 pl-6 " >
            <img alt="" src="/img/creator.png" />
          </div>
        </div>
        {/* <div>
          <div className="container">
            <div className="d-flex flex-wrap">
              <div
                className="col-lg-4 col-md-6 item-box wow fadeInLeft px-remove"
                data-wow-delay=".5s"
              >
                <img src="/img/gallery/1.png" alt="The Music Artiste" />
                <h6 className="mt-10">The Music Artiste</h6>
                <p>
                  Those who have spent months creating a hit but lack the funds
                  and community to help bring their dreams to fruition. Those
                  who are divided between pursuing their passion for music and
                  earning a living.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 item-box wow fadeInLeft px-remove"
                data-wow-delay=".5s"
              >
                <img src="/img/gallery/2.png" alt="The Creators/Labels/DJ" />
                <h6 className="mt-10">The Creators/Labels/DJ</h6>
                <p>
                  Those who are bursting at the seams with creative juice. Those
                  who can take something interesting and expand, improve, and
                  modify it to create new and interesting music/content.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 item-box wow fadeInLeft px-remove"
                data-wow-delay=".5s"
              >
                <img src="/img/gallery/3.png" alt="The Fans/Followers" />
                <h6 className="mt-10">The Fans/Followers</h6>
                <p>
                  Those who would love to invest and earn in the journey of
                  their favourite artists and creators.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="half-bg bottom"></div> */}
      </div>
      <div className="clearfix"></div>
    </>
  );
}