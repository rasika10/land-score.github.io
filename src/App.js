import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style.css"
import PropertyListings from "./pages/PropertyListings";
import LandProfile from "./pages/LandProfile";
import Login from "./pages/Login";
import ForgotPassword from "./pages/admin/components/ForgotPassword";
import LoginForm from "./pages/admin/components/LoginForm";
import OTPVerification from "./pages/admin/components/OTPVerification";
import ResetPassword from "./pages/admin/components/ResetPassword";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="property-listings" element={<PropertyListings />} />
          <Route path="/land-profile" element={<LandProfile />} />
          <Route element={<Login />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
