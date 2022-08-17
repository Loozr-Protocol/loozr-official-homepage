import { ToastOptions } from "react-toastify";

export const HTTP_STATUS_CODES = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
}

export const TOAST_OPTIONS: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const NEAR_NETWORK_DOMAINS = {
  testnet: '.testnet',
  mainnet: '.near'
}

export const LOOZR_MIXER = process.env.REACT_APP_LOOZR_MIXER;

export const NEAR_NETWORK_DOMAIN = NEAR_NETWORK_DOMAINS[process.env.REACT_APP_NETWORK]