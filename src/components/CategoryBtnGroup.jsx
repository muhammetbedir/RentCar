import React, { useState, useEffect } from "react";
import api from "./api";
import axios from "axios";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import Filter from "./Filter";

function CategoryBtnGroup({ setCategory, category }) {
  useEffect(() => {
    axios
      .get(
        `${api}genre/movie/list?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`
      )
      .then((res) => setCategory(res.data.genres));
    // console.log(category);
    //   .finally(() => setIsLoad(true));
  }, []);
  return (
    <div className="categoryBtnGroup">
      <button className="btn">
        <DirectionsCarIcon />
      </button>
      <button className="btn">
        <PedalBikeIcon />
      </button>
      <button className="btn">
        <TwoWheelerIcon />
      </button>
      <button className="btn">
        <Filter />
      </button>
    </div>
  );
}

export default CategoryBtnGroup;
