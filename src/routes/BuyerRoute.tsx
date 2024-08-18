import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AuthMiddleWare from "../middleware/AuthMiddleWare";

const BuyerRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthMiddleWare>
            <Home />
          </AuthMiddleWare>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default BuyerRoute;