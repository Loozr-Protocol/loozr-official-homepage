import axios, { AxiosStatic, AxiosError } from 'axios';
import { toast } from "react-toastify";
import { HTTP_STATUS_CODES, TOAST_OPTIONS } from '../config/constants';
import ENV from '../config/env';

export default class HttpClient {
  axiosInstance: AxiosStatic;

  constructor() {
    this.axiosInstance = axios;
    this.axiosInstance.defaults.baseURL = ENV.apiUrl;
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

    this.axiosInstance.interceptors.request.use(function (config) {
      const jwtToken = localStorage.getItem('jwtToken');
      if(jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }

      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    this.axiosInstance.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
        localStorage.removeItem('jwtToken');
      }
      return Promise.reject(error);
    });
  }
}

export function toastHttpError(err: AxiosError | any) {
  console.log('in herere', returnHttpError(err));
    toast.error(returnHttpError(err), TOAST_OPTIONS);
}

export function returnHttpError(err: AxiosError) {
  let errorMsg: string;
  if (err.response) {
    if (err.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
      const apiErrors = err.response.data['error']['details'];
      const errorKeys = Object.keys(apiErrors)
      errorMsg = apiErrors[errorKeys[0]];

      if (typeof errorMsg !== 'string'){
        errorMsg = errorMsg[0];
      }
    } else {
      errorMsg = "Request failed! Please try again";
    }
  } else {
    errorMsg = "Request failed! Please try again";
  }
  return errorMsg;
}