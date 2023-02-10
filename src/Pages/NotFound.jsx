import React from "react";
import { NavLink } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFoundPage">
      <img className="notFoundImage" src="../../public/Image-404.gif" alt="" />
      <div>
        <h3 className="notFoundInfo">Üzgünüz! Aradığınız Sayfa Bulunamadı.</h3>
        <NavLink className="notFoundBtn" to={"/"}>
          Anasayfa
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
