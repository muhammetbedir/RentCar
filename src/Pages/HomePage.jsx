import React, { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import Detail from "../components/Details/Detail";
import axios from "axios";
import api from "../components/api";
import { Pagination } from "@mui/material";
import CreateRent from "../components/CreateRent";
import CategoryBtnGroup from "../components/CategoryBtnGroup";
function HomePage() {
  const [id, setId] = useState(100);
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${api}discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results))
      .finally(() => setIsLoad(true));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <div className={active ? "homePage active" : "homePage"}>
      {isLoad ? (
        <>
          <div className={active ? "homeContainer active" : "homeContainer"}>
            <div className="headerContainer">
              <SearchBar />

              <div className="headerBtnContainer">
                <CategoryBtnGroup
                  setMovies={setMovies}
                  setCategory={setCategory}
                  category={category}
                />
                <CreateRent />
              </div>
            </div>
            <Carousel setId={setId} setActive={setActive} movies={movies} />
            <Pagination
              count={50}
              color="primary"
              onChange={(event, value) => setPage(value)}
            />
          </div>
          {active && <Detail active={active} id={id} setActive={setActive} />}
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default HomePage;
