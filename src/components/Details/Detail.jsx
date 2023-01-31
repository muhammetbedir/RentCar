import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";
import DetailsInfo from "./DetailsInfo";
import CloseIcon from "@mui/icons-material/Close";
import RentDetails from "./RentDetails";

function Detail({ active, id, setActive }) {
  const [car, setCar] = useState({});
  const [page, setPage] = useState(1);
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
        {page === 1 && <DetailsInfo car={car} />}
        {page === 2 && <RentDetails setPage={setPage} page={page} />}
        <div className="detailBtnGroup">
          {page > 0 && page < 2 && (
            <button
              className="detailComponentBtn"
              onClick={() => setPage(page + 1)}
            >
              Kirala
            </button>
          )}
          {page > 1 && page < 3 && (
            <button
              className="detailComponentBtn"
              onClick={() => setPage(page - 1)}
            >
              Geri
            </button>
          )}
        </div>
      </div>
      {/* <div className="detailPages">
        <button>a</button>
        <button>a</button>
        <button>a</button>
      </div> */}
    </div>
  );
}

export default Detail;
