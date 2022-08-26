import axios, { AxiosStatic } from 'axios';
import { toast } from "react-toastify";
import { HTTP_STATUS_CODES, TOAST_OPTIONS } from '../config/constants';
import { API_BASE_ENDPOINT } from '../config/constants/endpoints';

export default class HttpClient {
  axiosInstance: AxiosStatic;

  constructor() {
    this.axiosInstance = axios;
    this.axiosInstance.defaults.baseURL = API_BASE_ENDPOINT;
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

    this.axiosInstance.interceptors.request.use(function (config) {
      const jwtToken = localStorage.getItem('jwtToken');
      config.headers.Authorization = jwtToken ? `Bearer ${jwtToken}` : '';

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

export function httpError(err: any) {
  if (err.response) {
    if (err.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
      err.response.data.errors.forEach(errMsg => {
        toast.error(errMsg, TOAST_OPTIONS);
      });
    } else {
      toast.error("Request failed! Please try again", TOAST_OPTIONS);
    }
  } else {
    toast.error("Request failed! Please try again", TOAST_OPTIONS);
  }
}

export function returnHttpError(err: any) {
  let errorMsg: string;
  if (err.response) {
    if (err.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
      err.response.data.errors.forEach(errMsg => {
        errorMsg = errMsg;
      });
    } else {
      errorMsg = "Request failed! Please try again";
    }
  } else {
    errorMsg = "Request failed! Please try again";
  }
  return errorMsg;
}