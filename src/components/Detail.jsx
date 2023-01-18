import { useEffect, useState, useContext } from "react";
import axios from "axios";
import api from "./api";
import CloseIcon from "@mui/icons-material/Close";
function Detail({ active, id, setActive }) {
  const [car, setCar] = useState({});
  useEffect(() => {
    axios
      .get(
        `${api}movie/${id}?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`
      )
      .then((res) => setCar(res.data));
    setActive(true);
    console.log(car);
  }, [id]);
  return (
    <div className={active ? "detailContainer active" : "detailContainer"}>
      <div className="details">
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => setActive(false)}
        ></CloseIcon>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + car.backdrop_path}
          alt=""
          className="mainDetailImg"
        />
        <h2>{car.original_title}</h2>
        <p>{car.overview}</p>
        <div className="bookingInfo">
          <div>
            <img
              src="https://www.freeiconspng.com/thumbs/car-png/red-sports-car-png-1.png"
              alt=""
              className="locationImg"
            />
            <p>Araç Seçin</p>
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/thumbs/calendar-icon-png/calendar-icon-png-4.png"
              alt=""
              className="locationImg"
            />
            <p>Tarih Seçin</p>
          </div>
          <div>
            <img
              src="https://icon-library.com/images/booking-icon-png/booking-icon-png-4.jpg"
              alt=""
              className="locationImg"
            />
            <p>Aracı Kiralayın</p>
          </div>
        </div>
        <label htmlFor="firstDate">Alış Tarihi</label>
        <input type="date" name="" id="firstDate" />
        <label htmlFor="lastDate">Teslim Tarihi</label>
        <input type="date" name="" id="lastDate" />
        <button>Kirala</button>
      </div>
    </div>
  );
}

export default Detail;
