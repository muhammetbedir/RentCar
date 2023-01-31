import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Detail from "../components/Details/Detail";
import axios from "axios";
import api from "./api";

function UserRentInfo({ btn }) {
  const [id, setId] = useState(100);
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${api}discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          btn === 1 ? 1 : btn === 2 ? 2 : 3
        }&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results));
  }, [btn]);
  return (
    <div className={active ? "userRentInfo active" : "userRentInfo"}>
      <div
        className={active ? "userRentContainer active" : "userRentContainer"}
      >
        <Carousel setId={setId} setActive={setActive} movies={movies} />
      </div>
      {active && <Detail active={active} id={id} setActive={setActive} />}
    </div>
  );
}

export default UserRentInfo;
