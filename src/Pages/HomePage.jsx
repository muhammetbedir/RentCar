import React, { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "../components/SearchBar";
import Detail from "../components/Detail";
import axios from "axios";
import api from "../components/api";

function HomePage() {
  const [id, setId] = useState(100);
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${api}discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
    <div className={active ? "homePage active" : "homePage"}>
      <div className={active ? "homeContainer active" : "homeContainer"}>
        <SearchBar />
        <Carousel
          setId={setId}
          setActive={setActive}
          active={active}
          movies={movies}
        />
      </div>
      {active && <Detail active={active} id={id} setActive={setActive} />}
    </div>
  );
}

export default HomePage;
