import { useEffect, useState } from "react";
import { useUser } from "../context/UserProvider";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { useNavigate } from "react-router-dom";
import BtnGroup from "../components/BtnGroup";
import UserRentInfo from "../components/UserRentInfo";
import UserSettings from "../components/UserSettings";

function Profile() {
  const navigate = useNavigate();
  const { userName, isLoggedin } = useUser();
  const [btn, setBtn] = useState(1);
  useEffect(() => {
    !localStorage.getItem("logged") && navigate(`/login`);
  }, [isLoggedin]);
  
  return (
    <div className="profilePage">
      <UserSettings />
      <div className="profileHead">
        <div className="profileInfo">
          <img
            src="https://cdn1.ntv.com.tr/gorsel/uMpPdC6mtUCHkXgRrBY7jA.jpg?width=1000&mode=crop&scale=both"
            alt=""
            className="profilePhoto"
          />
          <div>
            <h2>{userName.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit
              modi eligendi, tempora sed consequatur corrupti natus nisi enim
              sint error aperiam laudantium, ullam ipsum provident illo mollitia
              pariatur praesentium!
            </p>
          </div>
        </div>
        <div className="rentInfo">
          <div>
            <ThumbUpOffAltIcon />
            <h4>3 Like</h4>
          </div>
          <div>
            <ThumbDownOffAltIcon />
            <h4>3 Dislike</h4>
          </div>
          <div>
            <HistoryToggleOffIcon />
            <h4>1 Gün Önce</h4>
          </div>
        </div>
        <div className="btnContainer">
          <BtnGroup btn={btn} setBtn={setBtn} />
        </div>
      </div>
      <UserRentInfo btn={btn} />
    </div>
  );
}

export default Profile;
