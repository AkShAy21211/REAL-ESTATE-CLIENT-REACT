import React, { ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

type AuthMiddleWareProp = {
  children: ReactNode;
};

const AuthMiddleWare = ({ children }: AuthMiddleWareProp) => {
  const { getData } = useLocalStorage();
  const token = getData("token") as string | null; // Explicitly type token

  // Consider checking the token's validity if it's more than just existence
  const isAuthenticated = token !== null && token !== undefined;

  return <>{isAuthenticated ? children : <Navigate to="/signup" />}</>;
};

export default AuthMiddleWare;
