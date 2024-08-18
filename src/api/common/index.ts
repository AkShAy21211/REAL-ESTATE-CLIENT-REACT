import toast from "react-simple-toasts";
import { createAxiosInstance } from "../axios";
import { COMMON_ENDPOINT } from "../endpoints/common";

const token = localStorage.getItem("token");
const axiosInstance = createAxiosInstance(
  "http://localhost:5000/api",
);

export const signUp = async (
  username: string,
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post(COMMON_ENDPOINT.SIGNUP, {
      username: username,
      name: name,
      email: email,
      password: password,
    });

    console.log(response);

    if (response.data.status) {
      toast(response.data.message, {
        theme: "dark",
        position: "top-center",
        className: "bg-green-500",
      });
      return;
    }
    return response.data;
  } catch (error: any) {
    toast(error.response.data.message, {
      theme: "dark",
      position: "top-center",
      className: "bg-red-500",
    });

    console.error(error);
    return;
  }
};

export const signIn = async (
  usernameoremail: string,
  password: string,
  role: string
) => {
  try {
    const response = await axiosInstance.post(COMMON_ENDPOINT.SIGNIN, {
      usernameoremail: usernameoremail,
      password: password,
      role: role,
    });

    console.log(response);

    if (response.data.status) {
      toast(response.data.message, {
        theme: "dark",
        position: "top-center",
        className: "bg-green-500",
      });
      return response.data;
    }
  } catch (error: any) {
    toast(error.response.data.message, {
      theme: "dark",
      position: "top-center",
      className: "bg-red-500",
    });
    console.error(error);

    return;
  }
};

export const getProperties = async (count?: number) => {
  try {
    const response = await axiosInstance.get(
      COMMON_ENDPOINT.GET_PROPERTY + `?count=${count}`
    );

    return response.data;
  } catch (error: any) {
    console.error(error);

    return;
  }
};
