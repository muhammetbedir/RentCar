import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
import { useUser } from "../context/UserProvider";

function Tabbar() {
  const { userName, setUserName } = useUser();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue === 0
      ? navigate("/")
      : newValue === 1
      ? navigate("/favori")
      : userName.name
      ? navigate(`/user/${userName.name}`)
      : navigate("/login");
  };
  useEffect(() => {
    const path = window.location.pathname;
    path === "/"
      ? setValue(0)
      : path === "/favori"
      ? setValue(1)
      : path === "/login" || path === "/user"
      ? setValue(2)
      : setValue(3);
  }, []);
  return (
    <div>
      <Tabs
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 999,
          backgroundColor: "#fff",
          boxShadow: 2,
        }}
        centered
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab sx={{ width: 1 / 4 }} icon={<Home />} label="Anasayfa" />
        <Tab sx={{ width: 1 / 4 }} icon={<FavoriteIcon />} label="Favoriler" />
        {
          <Tab
            sx={{ width: 1 / 4 }}
            icon={<PersonPinIcon />}
            label={userName.name ? "Profil" : "Giriş Yap"}
          />
        }
      </Tabs>
    </div>
  );
}

export default Tabbar;
