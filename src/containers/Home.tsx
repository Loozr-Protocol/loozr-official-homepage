import Header from "../components/Home/Header";
import AboutSection from "../components/Home/AboutSection";
import ArtistShowcase from "../components/Home/ArtistShowcase";
import WhySection from "../components/Home/WhySection";
import Community from "../components/Home/Community";
import Services from "../components/Home/Services";
import RoadMap from "../components/Home/Roadmap";
import Tokenomics from "../components/Home/Tokenomics";
import Team from "../components/Home/Team";
import FlagShip from "../components/Home/FlagShip";
import FeatureSection from "../components/Home/FeatureSection";
import FAQ from "../components/Home/FAQ";
import { Parallax, Background } from 'react-parallax';

export default function Home() {
  return (
    <> 
      <div className=" relative w-full z-10 !bg-[#0c0f16] h-screen " >
        <Header />  
      </div>
      <div className="main-content relative ">  
        <div className=" w-full h-[100vh] relative " >
          <div className=" fixed -z-10 inset-0 " >
            <AboutSection /> 
          </div>
        </div>
        <div className=" relative w-full z-10  !bg-[#0c0f15]   " > 
          <ArtistShowcase />
          <WhySection />
          <FlagShip />
          <FeatureSection />
          <FAQ />  
        </div>
        {/* <Services />
        <RoadMap />
        <Tokenomics />
        <Team />
        <Community /> */}
      </div>
    </>
  );
}
