import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const TrendingWeek = ({ data }) => {
  return (
    <div className="poster_container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="movie-poster"
      ></img>
      <Link>{data.original_title}</Link>
    </div>
  );
};

export default memo(TrendingWeek);
