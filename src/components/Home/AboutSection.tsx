import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function AboutSection() {

  const tbgStyle = {
    bottom: "100px",
    "fontSize": "14vw",
  };
  
  const [isShown, setIsShown] = React.useState(0)

  const boxAnimation = {
    key: "box",
    initial: { 
      opacity: 0,
      y: 20
        // scale: 0.5,
    },
    animate: {
        y: 0,
        opacity: 1,
        // scale: 1,
    },
    exit: { 
        opacity: 0,  
        y: -20
        // scale: 0.5,
    },
    transition: {
        duration: 0.2,
        ease: "easeOut",
    },
  }

  const array = ["Musicians", "Content creators", "Fans", "Record labels", "Small businesses", "Podcasters", "Poets", "DJs", "SpaceHosts", "Producers", "Music distributor", "Comedians"] 

  React.useEffect(() => { 
    const t1 = setTimeout(() => {  
      if(isShown === array.length-1){ 
        setIsShown(0) 
      } else { 
        setIsShown(prev=>prev+1) 
      }
    }, 1500); 
    return () => { 
      clearTimeout(t1); 
    }
  },[isShown]) 
  
  return (
    <div className=" px-20 " >
      <div id="block-nvblockaboutindex" className="about flex items-center mt-30">
        <div className="container pt-32 ">
          <div className="sec-head mb-3 custom-font d-flex flex-column">
            <div className=" pl-8 max-w-[500px] ">
              <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[13px] " data-wow-delay=".5s">
                THE FIRST SOCIAL MUSIC LAYER OF WEB3.0
              </h6> 
              <p className="main-title !font-bold !text-white mt-8 !leading-[1.1] !text-[43px]  wow">
                Where DeFi, GameFi & SocialFi Meet <br/>
                <div className=" w-full relative -mt-1 " >
                  {array.map((item: any, index: any) => {
                    return( 
                      <AnimatePresence  key={index} >
                        {index === isShown && 
                          <motion.div {...boxAnimation} className=" absolute " > 
                            <span  id="gradenttext" className=" main-title !font-bold !text-[43px]  wow " >{item}.</span>
                          </motion.div> 
                        }
                      </AnimatePresence> 
                    )
                  })}  
                </div>
                <p className=" text-transparent " >{array[isShown]}</p>
              </p> 
              <p className="wow txt text-[14px] pr-8 text-white !font-normal ">
                It enables creators to tokenize their name/brand, content, and songs; allowing fans to buy, sell, trade and promote these tokens directly in real time on the blockchain while also sharing streaming earnings.
                <br/>
                <span className="mt-2" >
                Loozr is currently paving the way for the new creator market and setting the pace for global adoption of Web3, through the love of music.
                </span>
              </p>
            </div>
            <span className="tbg" style={tbgStyle}>
              Welcome
            </span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className=" lg:w-[60%]  ">
          <div className="mx-auto  ">
            <div className="img1 wow imago" data-wow-delay=".5s">
              <img src="/img/aboutus.png" className=" w-[80%] object-contain "  alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
