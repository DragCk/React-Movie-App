import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingWeek from "../component/TrendingWeek";
import TrendingDay from "../component/TrendingDay";

const Homepage = () => {
  const [data_day, setData_day] = useState(null);
  const [data_week, setData_week] = useState(null);
  const API_KEY = "5de63c66e13309e07449cbacaf625754";
  const movie_URL_week = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const movie_URL_day = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const trendingWeek = async (url) => {
    try {
      const result = await axios.get(url);
      setData_week(result.data);
      console.log(result.data);
    } catch (e) {
      if (e.response) {
        console.log("錯誤狀態碼:", e.response.status);
        console.log("錯誤訊息:", e.response.data);
      } else {
        console.log("請求失敗:", e.message);
      }
    }
  };

  const trendingDay = async (url) => {
    try {
      const result = await axios.get(url);
      setData_day(result.data);
      console.log(result.data);
    } catch (e) {
      if (e.response) {
        console.log("錯誤狀態碼:", e.response.status);
        console.log("錯誤訊息:", e.response.data);
      } else {
        console.log("請求失敗:", e.message);
      }
    }
  };

  useEffect(() => {
    trendingWeek(movie_URL_week);
    trendingDay(movie_URL_day);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="homepage">
      <header>
        <div className="content_box">
          <h2>WELCOME to Movie Planet!</h2>
          <h3>Enjoy our best Movie and TVshows</h3>
        </div>
        <div className="search_box">
          <input type="text" />
          <button type={"submit"}>Search</button>
        </div>
      </header>
      <section className="movies">
        <div className="column">
          <p>Week trending Movies</p>
        </div>
        <div className="movies_containers">
          {data_day &&
            data_day.results.map((d) => {
              return <TrendingDay key={d.id} data={d} />;
            })}
        </div>
      </section>

      <section className="movies">
        <div className="column">
          <p>Day trending Movies</p>
        </div>
        <div className="movies_containers">
          {data_week &&
            data_week.results.map((d) => {
              return <TrendingWeek key={d.id} data={d} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
