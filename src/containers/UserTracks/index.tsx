import React from 'react'
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export default function UserTracks() {
    const tracks = [
      {
        title: "Password Infinity",
        artist: "EvgenyBardyuzha",
        img: "https://cdn.pixabay.com/audio/2022/10/18/12-55-08-891_200x200.jpg",
      },
      {
        title: "Inspiring Cinematic Ambien",
        artist: "Lexin Music",
        img: "https://cdn.pixabay.com/audio/2022/08/02/19-23-38-897_200x200.jpg",
      },
      {
        title: "Leonell Cassio - The Blackest Bouquet",
        artist: "LeonellCassio",
        img: "https://cdn.pixabay.com/audio/2022/08/31/19-48-37-847_200x200.jpg",
      },
      {
        title: "Motivational Epic Music / Inspiring Cinematic Background Music",
        artist: "SoulProdMusic",
        img: "https://cdn.pixabay.com/audio/2022/10/28/13-40-40-910_200x200.jpg",
      },
      {
        title: "Lofi Study",
        artist: "FASSounds",
        img: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
      },
      {
        title: "Happy Day",
        artist: "Stockaudios",
        img: "https://cdn.pixabay.com/audio/2022/11/18/00-18-44-918_200x200.jpg",
      },
      {
        title: "Weeknds",
        artist: "DayFox",
        img: "https://cdn.pixabay.com/audio/2022/10/12/09-28-04-865_200x200.jpg",
      },
      {
        title: "Stomping Rock (Four Shots)",
        artist: "AlexGrohl",
        img: "https://cdn.pixabay.com/audio/2022/05/17/19-32-35-334_200x200.jpg",
      },
      {
        title: "Price of Freedom",
        artist: "Daddy s Music",
        img: "https://cdn.pixabay.com/audio/2022/04/19/14-43-14-304_200x200.png",
      },
      {
        title: "Relaxing Music Vol.1",
        artist: "RelaxingTime",
        img: "https://cdn.pixabay.com/audio/2022/10/30/16-30-47-204_200x200.jpg",
      },
      {
        title: "Space",
        artist: "Music Unlimited",
        img: "https://cdn.pixabay.com/audio/2022/09/17/20-13-39-414_200x200.jpg",
      },
      {
        title: "Whip",
        artist: "prazkhanal",
        img: "https://cdn.pixabay.com/audio/2022/08/12/09-43-51-852_200x200.png",
      },
    ];

    const [isShown, setIsShown] = React.useState("")
    return (
        // <div className=" w-full grid-cols-4 grid gap-4 pt-6 " >

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5  gap-y-10">
        {tracks.map((track, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { setPlaying, playing } = useAudioPlayer(index);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [show, setShow] = React.useState(false);

          const Checking =(item: any, text: any, shown: any)=> {
            setShow(shown)
            if(text.length > 19){ 
              setIsShown(item+"")
            } else { 
              setIsShown("false")
            }
          }
          return (
            <motion.div  
              whileHover={{
                scale: 1.02, 
                transition: { duration: 0.3 },
              }} key={index} className="w-full relative"  >
                <div className=" absolute inset-0 z-10 cursor-pointer "
                  onMouseOver={() => {
                    // setPlaying(true);
                    // setShow(true);
                    Checking(index, track.title, true)
                  }}
                  onMouseOut={() => {
                    // setPlaying(false);
                    Checking(index, track.title, false)
                    // setShow(false);
                  }}  onClick={() => setPlaying(!playing)} />
              <div
                className="relative"
              >
                <img src={track.img} alt="" width={"100%"} height={203} />
                {/* <div
                  onMouseOver={() => setShow(true)}
                  onMouseOut={() => setShow(false)}
                  className={`absolute inset-y-[45%] inset-x-[43%] ${
                    !show && "hidden"
                  }`}
                >
                  {playing ? (
                    <Pause handleClick={() => setPlaying(false)} />
                  ) : (
                    <Play handleClick={() => setPlaying(true)} />
                  )}
                </div> */}
              </div>
              <audio id={`audio-${index}`}>
                <source src={"/song.mp3"} />
                Your browser does not support the <code>audio</code> element.
              </audio> 
              <div className=" mt-3 w-full " >
                <Marquee speed={50} loop={isShown === index+"" ? 0 : -1} gradient={false} >
                  <p className="mb-[3px] font-medium text-sm text-white">
                    {track.title+" "}
                  </p> 
                </Marquee> 
              </div> 
              <p className="text-muted text-xs font-normal">{track.artist}</p>
            </motion.div>
          );
        })}
        </div>
    )
}
