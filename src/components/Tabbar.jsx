import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
import { useUser } from "../context/UserProvider";
import { NavLink } from "react-router-dom";
function Tabbar() {
  const { userName, isLoggedin } = useUser();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  return (
    <div className="tabbar">
      <NavLink to="/">
        <Home />
        Anasayfa
      </NavLink>
      <NavLink to="/favori">
        <FavoriteIcon />
        Favoriler
      </NavLink>
      {isLoggedin ? (
        <NavLink to={`/user/${userName.name}`}>
          <PersonPinIcon />
          Profil
        </NavLink>
      ) : (
        <NavLink to="/login">
          <PersonPinIcon />
          Giriş Yap
        </NavLink>
      )}
    </div>
  );
}

export default Tabbar;
