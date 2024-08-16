import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

const authMiddleWare = ({ children }: React.ReactNode) => {
  const { getData } = useLocalStorage();
  const token = getData("toekn");

  return <>{token ? children : <Navigate to={'/'}/>} </>;
};

export default authMiddleWare;
