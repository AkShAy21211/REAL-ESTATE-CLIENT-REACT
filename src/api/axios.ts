import axios from "axios";

export const createAxiosInstance = (baseEndPoint:string, token:string) => {
  const api = axios.create({
    baseURL: baseEndPoint, // our API base URL
  });

  api.interceptors.request.use(
    (config) => {
      // If use api keys
      if (token) {
        config.headers["Authorization"] = 'Bearer '+token;
      }
      //If use Bearer tokens
      // config.headers.Authorization = `Bearer ${apiKey}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};