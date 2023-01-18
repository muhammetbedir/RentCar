import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import { useUser } from "../context/UserProvider";
import api from "../components/api";
import Detail from "../components/Detail";
function Favorite() {
  const { userName, setUserName, isLoggedin } = useUser();
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);
  const [id, setId] = useState(100);
  useEffect(() => {
    axios
      .get(
        `${api}discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
    <div className={active ? "favoritePage active" : "favoritePage"}>
      <div className="favoriteCarousel">
        {isLoggedin ? (
          <Carousel movies={movies} setActive={setActive} setId={setId} />
        ) : (
          <h2>Lütfen Giriş Yapınız.</h2>
        )}
      </div>
      {isLoggedin && active && (
        <Detail active={active} id={id} setActive={setActive} />
      )}
    </div>
  );
}

export default Favorite;
