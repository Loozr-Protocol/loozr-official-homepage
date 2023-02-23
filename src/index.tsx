import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Axios from "axios";
import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import store from "./state/store";
import { API_BASE_ENDPOINT } from "./config/constants/endpoints";
import LogRocket from "logrocket";
import { getUserDetails } from "./state/user/userActions";
import { parseJwt } from "./utils/index";
import { ChakraProvider } from "@chakra-ui/react";

declare global {
  interface Window {
    paceOptions: any;
    Pace: any;
  }
}
Axios.defaults.headers.common["Content-Type"] = "application/json";
Axios.defaults.headers.common["Accept"] = "application/json";
Axios.defaults.baseURL = API_BASE_ENDPOINT;

setTimeout(() => {
  document.querySelector("#preloader")?.classList.add("isdone");
  document.querySelector(".loading-text")?.classList.add("isdone");
}, 2000);

Swiper.use([Autoplay]);

new Swiper(".metro .swiper-container", {
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    901: {
      slidesPerView: 3.4,
      spaceBetween: 0,
    },
    920: {
      slidesPerView: 4.5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 0,
    },
  },

  pagination: {
    el: ".metro .swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".metro .swiper-button-next",
    prevEl: ".metro .swiper-button-prev",
  },
});

const jwtToken = localStorage.getItem("jwtToken")
  ? localStorage.getItem("jwtToken")
  : null;

if(jwtToken){
  const decodedJwt = parseJwt(jwtToken);
  store.dispatch(getUserDetails(decodedJwt.id));
}

if (process.env.NODE_ENV === "production") {
  LogRocket.init("hrsvnj/loozr");
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
