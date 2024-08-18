import toast from "react-simple-toasts";
import { createAxiosInstance } from "../axios";
import { REALTOR_ENDPOINT } from "../endpoints/realtor";

const realtorAxios = createAxiosInstance(
  "http://localhost:5000/api",
);



export const addNewProperty = async (
  data: FormData,
) => {
  try {
    
   
    
    const response = await realtorAxios.post(REALTOR_ENDPOINT.ADD_PROPERTY,data);

    if (response.data.status) {
      toast(response.data.message, {
        theme: "dark",
        position: "top-center",
        className: "bg-green-500",
      });
      return;
    }
  } catch (error: any) {
    toast(error.response.data.message, {
      theme: "dark",
      position: "top-center",
      className: "bg-green-500",
    });
    console.log(error);
  }
};
