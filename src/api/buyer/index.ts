import { createAxiosInstance } from "../axios";

const token = localStorage.getItem("token");
const buyer = createAxiosInstance(
  "http://localhost:5000/api",
);
