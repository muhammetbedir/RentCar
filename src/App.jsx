import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Tabbar from './components/Tabbar';
import SearchBar from './components/SearchBar';
function App() {

  return (
    <div className="App">
      <SearchBar />
  <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favori" element={"Favoriler"} />
          <Route path="/signin" element={"Giriş"} />
          <Route path="*" element={"boş"} />
      </Routes>
    <Tabbar/>
    </div>
  )
}

export default App
