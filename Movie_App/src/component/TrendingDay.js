import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

const TrendingDay = ({ data }) => {
  return (
    <div className="poster_container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="movie-poster"
      ></img>
      <Link to="/movie">{data.original_title}</Link>
    </div>
  );
};

export default memo(TrendingDay);
