import { createAxiosInstance } from "./user/axios";

const token = localStorage.getItem("token");
const userAxios = createAxiosInstance(
  "http://localhost:5000/api/user",
  token as string
);

export const signUp = async (
  username: string,
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await userAxios.post("/signup", {
      username: username,
      name: name,
      email: email,
      password: password,
    });
   return response.data;
  } catch (error) {
    console.error(error);
  }
};
