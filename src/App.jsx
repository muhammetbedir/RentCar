import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Tabbar from "./components/Tabbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favori" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/user/:name" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Tabbar />
    </div>
  );
}

export default App;
