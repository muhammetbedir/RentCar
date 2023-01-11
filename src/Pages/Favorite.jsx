import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import { useUser } from "../context/UserProvider";
import api from "../components/api";

function Favorite() {
  const { userName, setUserName } = useUser();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${api}discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
    <div className="favoritePage">
      <Carousel id={userName.id} movies={movies} />
    </div>
  );
}

export default Favorite;
