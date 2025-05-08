import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import Header from "./sections/Header";
import { HelmetProvider } from "react-helmet-async";
import Sidebar from "./sections/Sidebar";
import LogIn from "./components/user/LogIn";
import Footer from "./sections/Footer";
import Register from "./components/user/Register";
import ForgotPassword from "./components/user/ForgotPassword";
import { loadUser } from "./actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ResetPassword from "./components/user/ResetPassword";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import PropertiesCard from "./components/properties/PropertiesCard";
import PropertyDetails from "./components/properties/PropertyDetails";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  return (
    <Router>
      <div>
        <HelmetProvider>
          <Header />
          <div>
            <ToastContainer element="dark" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password/forgot" element={<ForgotPassword />} />
              <Route
                path="/password/reset/:token"
                element={<ResetPassword />}
              />
              {/* <Route path="/product/:id" element={<PropertiesCard/>}/> */}
              <Route path="/products/:id" element={<PropertyDetails/>}/>
              <Route
                path="/myprofile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/myprofile/update"
                element={
                  <ProtectedRoute>
                    <UpdateProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/myprofile/update/password"
                element={
                  <ProtectedRoute>
                    <UpdatePassword />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Sidebar />
          </div>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
};
export default App;
