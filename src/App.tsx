import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RealtorRoute from "./routes/RealtorRoute";
import BuyerRoute from "./routes/BuyerRoute";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<BuyerRoute />} />
        <Route path="/realtor/*" element={<RealtorRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
