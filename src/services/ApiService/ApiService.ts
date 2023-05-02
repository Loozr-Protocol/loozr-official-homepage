import axios, { AxiosInstance } from 'axios';
import ENV from "../../config/env";
import { returnHttpError } from '../../utils/httpHelper';

class ApiService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: ENV.apiUrl
    });

    this.client.interceptors.request.use(function (config) {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }

      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    this.client.interceptors.response.use(
      response => response.data,
      error => {
        throw new Error(returnHttpError(error))
      }
    );
  }

  async get(endpoint, params = {}) {
    try {
      const response = await this.client.get(endpoint, { params });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post(endpoint, data = {}, options={}) {
    try {
      const response = await this.client.post(endpoint, data, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, data = {}) {
    try {
      const response = await this.client.put(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await this.client.delete(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();
