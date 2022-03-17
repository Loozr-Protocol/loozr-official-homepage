import Header from "../components/Home/Header";
import AboutSection from "../components/Home/AboutSection";
import ArtistShowcase from "../components/Home/ArtistShowcase";
import WhySection from "../components/Home/WhySection";
import Community from "../components/Home/Community";
import Services from "../components/Home/Services";
import RoadMap from "../components/Home/Roadmap";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <AboutSection />
        <ArtistShowcase />
        <WhySection />
        <Services />
        <RoadMap />
        <Community />
      </div>
    </>
  );
}
