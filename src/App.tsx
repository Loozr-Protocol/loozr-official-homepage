import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Player from "./components/song/Player/Player";
import Home from "./containers/Home";
import ArtistDashboard from "./containers/ArtistDashboard";
import Footer from "./components/Footer";
import SongDashboard from "./containers/SongDashboard";
import ArtistsEcosystem from "./containers/ArtistsEcosystem";
import WaitlistModal from "./components/WaitlistModal";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppLayout from "./components/Layout/App";
import RecoverPassword from "./containers/RecoverPassword";
import { authRoutes, dashboard, routes } from "./router/routes";
import Dashboard from "./components/Layout/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./state/user/userActions";
import { AppState } from "./state/store";
import AuthVerify from "./containers/AuthVerify";
import RequireAuth from "./containers/RequireAuth";

const NotFound = () => (
  <div className="main-content">
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

const App = () => {
  const { jwtToken } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwtToken) {
      dispatch(getUserDetails());
    }
  }, [jwtToken, dispatch]);

  return (
    <>
      <ToastContainer />
      <Router>
        <div>
          {/* <a href="#main-content" className="visually-hidden focusable">
              Skip to main content
            </a> */}

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
            <WaitlistModal />
            <Routes>
              {authRoutes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={
                    <>
                      <route.component />
                      <Footer />
                    </>
                  }
                />
              ))}
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={
                    <AppLayout>
                      <route.component />
                      <Footer />
                    </AppLayout>
                  }
                />
              ))}
              {dashboard.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={
                    <RequireAuth>
                      <Dashboard>
                        <route.component />
                      </Dashboard>
                    </RequireAuth>
                  }
                />
              ))}
              <Route path="*" element={NotFound} />
            </Routes>
            <Player />
            <a href="#focused" id="focus-link" hidden>
              Go to playing element
            </a>
          </div>
        </div>
        <AuthVerify />
      </Router>
    </>
  );
};

export default App;
