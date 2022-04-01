import Header from "../components/Home/Header";
import AboutSection from "../components/Home/AboutSection";
import ArtistShowcase from "../components/Home/ArtistShowcase";
import WhySection from "../components/Home/WhySection";
import Community from "../components/Home/Community";
import Services from "../components/Home/Services";
import RoadMap from "../components/Home/Roadmap";
import Tokenomics from "../components/Home/Tokenomics";
import Team from "../components/Home/Team";
import LoozrVrz from "../components/Home/LoozrVrz";
import WaitlistModal from "../components/WaitlistModal";

export default function Home() {
  return (
    <>
      <WaitlistModal />
      <Header />
      <div className="main-content">
        <AboutSection />
        <ArtistShowcase />
        <WhySection />
        <Services />
        <RoadMap />
        <Tokenomics />
        <Team />
        <LoozrVrz />
        <Community />
      </div>
    </>
  );
}
