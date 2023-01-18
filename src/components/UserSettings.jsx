import React, { useState } from "react";
import UpdateUserInfo from "./UpdateUserInfo";

import SettingsIcon from "@mui/icons-material/Settings";
import { useUser } from "../context/UserProvider";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import OutsideClickHandler from "react-outside-click-handler";
import UpdateUserPhoto from "./UpdateUserPhoto";

function UserSettings() {
  const { userName, setUserName, setIsLoggedin, isLoggedin } = useUser();
  const [drop, setDrop] = useState(false);
  const logOut = () => {
    localStorage.clear("user");
    localStorage.clear("logged");
    setUserName({});
    setIsLoggedin(false);
  };
  return (
      <div className="profileDropdownContainer">
        <SettingsIcon
          style={{ cursor: "pointer" }}
          onClick={() => setDrop(!drop)}
        />
        {drop && (
          <ul className="profileDropdown" onClick={()=> setDrop(false)}>
            <Popup modal nested trigger={<li>Bilgileri Güncelle</li>}>
              <UpdateUserInfo  />
            </Popup>
            <Popup modal nested trigger={  <li>Fotoğraf Değiştir</li>}>
            <UpdateUserPhoto  />
          </Popup>
          
            <li onClick={logOut}>Çıkış Yap</li>
          </ul>
        )}
      </div>
  );
}

export default UserSettings;
