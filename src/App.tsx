import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ArtistShowcase from "./components/ArtistShowcase";
import WhySection from './components/WhySection';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <a href="#main-content" className="visually-hidden focusable">
        Skip to main content
      </a>

      <div id="preloader"></div>
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div
        className="dialog-off-canvas-main-canvas"
        data-off-canvas-main-canvas
      >
        <Header />
        <div className="main-content">
          <AboutSection />
          <ArtistShowcase />
          <WhySection />
          <Community />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
