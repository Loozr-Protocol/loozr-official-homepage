import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactSwipe from "react-swipe";
import slide1 from "../../assets/img/dashboard-banner.png";
import slide2 from "../../assets/img/slider.jpg";
import slide3 from "../../assets/img/slider2.jpeg";
import slide4 from "../../assets/img/slider3.jpg";

const Carousel = () => {
  let reactSwipeEl;
  const directionOffset = 800;

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
        duration: 1,
        ease: "easeOut",
    },
  }

  const [isShown, setIsShown] = React.useState(0)
  const images: any = [ slide1, slide2, slide3, slide4 ] 

  // const numberOfSlides = 3;
  // const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  //   return (
  //     <div
  //       key={i}
  //       className="w-full  min-h-[210px] bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end mb-7 relative"
  //       style={{ background: `url(${Banner})`, backgroundColor: "#000" }}
  //     >
  //       <p>
  //         <span className="text-loozr-purple font-medium text-[13px]">
  //           MUSIC
  //         </span>{" "}
  //         <span className="text-xs">/ 2 months ago</span>
  //       </p>
  //       <p className="text-white font-semibold text-[17px] leading-7 max-w-[300px]">
  //         DISCOVER, BUY & SELL ARTISTE Coins.
  //       </p> 
  //     </div>
  //   );
  // });
 

  React.useEffect(() => { 
    const t1 = setTimeout(() => {  
      if(isShown === images.length-1){ 
        setIsShown(0) 
      } else { 
        setIsShown(prev=>prev+1) 
      }
    }, 5000); 
    return () => { 
      clearTimeout(t1); 
    }
  },[isShown])
  

  return(
    <div className="h-[250px] w-full relative  " > 
      {images.map((item: any, index: any) => {
          return( 
            <AnimatePresence  key={item} >
              {index === isShown &&
                <motion.div 
                  key={item} 
                    className="w-full  min-h-[210px] absolute top-0 bg-no-repeat bg-cover bg-center pl-8 py-7 flex flex-col justify-end "
                    style={{ background: `url(${item})`, backgroundColor: "#000", backgroundPosition: "cover" }}
                    {...boxAnimation}
                  >
                    <p>
                      <span className="text-loozr-purple font-medium text-[13px]">
                        MUSIC
                      </span>{" "}
                      <span className="text-xs">/ 2 months ago</span>
                    </p>
                    <p className="text-white font-semibold text-[17px] leading-7 max-w-[300px]">
                      DISCOVER, BUY & SELL ARTISTE Coins.
                    </p> 
                </motion.div> 
              }
            </AnimatePresence> 
          )})} 
          {/* <div className=" w-full flex justify-center absolute bottom-4 " >
            {images.map((item: any, index: any) => { 
              return(
                <div onClick={()=> setIsShown(index) } key={item} className={isShown === index ? " w-2 h-2 bg-loozr-purple rounded-full mx-1 cursor-pointer " : " w-2 h-2 bg-white rounded-full mx-1 cursor-pointer "} /> 
              )
            })}
          </div> */}
    </div>
  )
};

export default Carousel;
