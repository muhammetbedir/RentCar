import { useEffect, useState, useContext } from "react";
import axios from "axios";
import api from "./api";

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
        <div style={{ cursor: "pointer" }} onClick={() => setActive(false)}>
          X
        </div>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + car.backdrop_path}
          alt=""
        />
        <h2>{car.original_title}</h2>
        <p>{car.overview}</p>
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
