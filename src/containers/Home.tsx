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

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <AboutSection />
        <ArtistShowcase />
        <WhySection />
        <FlagShip />
        <FeatureSection />
        <Services />
        <RoadMap />
        <Tokenomics />
        <Team />
        <Community />
      </div>
    </>
  );
}
