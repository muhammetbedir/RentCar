import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Tabbar from "./components/Tabbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Favorite from "./Pages/Favorite";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favori" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/:name" element={"user"} />
        <Route path="*" element={"boş"} />
      </Routes>
      <Tabbar />
    </div>
  );
}

export default App;
