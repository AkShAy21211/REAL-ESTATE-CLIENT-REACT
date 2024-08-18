import axios from "axios";

const token = JSON.parse(localStorage.getItem("token") as string);
  console.log('eeeeeeeeeeeeeeee',token);

export const createAxiosInstance = (baseEndPoint: string) => {
  const api = axios.create({
    baseURL: baseEndPoint, // our API base URL
  });


  api.interceptors.request.use(
    (config) => {
      // If use api keys

      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        // Set other headers or default Content-Type if needed
        config.headers["Content-Type"] = "application/json";
      }
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
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
