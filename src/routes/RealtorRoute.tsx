import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AuthMiddleWare from "../middleware/AuthMiddleWare";
import PropertyForm from "../pages/PropertyForm";

const RealtorRoute = () => {
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
      <Route path="/property/new" element={<PropertyForm />} />
    </Routes>
  );
};

export default RealtorRoute;
