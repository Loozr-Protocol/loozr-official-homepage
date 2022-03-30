import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Player from "./components/song/Player/Player";
import Home from "./containers/Home";
import ArtistDashboard from "./containers/ArtistDashboard";
import Footer from "./components/Footer";
import SongDashboard from "./containers/SongDashboard";
import ArtistsEcosystem from "./containers/ArtistsEcosystem";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <>
        <Router>
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
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artistes/ecosystem" element={<ArtistsEcosystem />} />
                <Route path="/artists/:id" element={<ArtistDashboard />} />
                <Route
                  path="/artists/:id/songs/:songId"
                  element={<SongDashboard />}
                />
              </Routes>
              <Footer />
              <Player />
              <a href="#focused" id="focus-link" hidden>
                Go to playing element
              </a>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
