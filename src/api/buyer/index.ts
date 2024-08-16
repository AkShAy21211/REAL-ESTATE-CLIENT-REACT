import { createAxiosInstance } from "../axios";

const token = localStorage.getItem("token");
const userAxios = createAxiosInstance(
  "http://localhost:5000/api",
  token as string
);

