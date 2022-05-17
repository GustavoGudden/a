import "./Result.css";
import { useState, useEffect } from "react";
import { apikey } from "../config/ApiKey";
import { Link } from "react-router-dom";
const Result = () => {
  const [api, setapi] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
    )
      .then((Response) => Response.json())
      .then((data) => setapi(data.results));
  }, []);

  return (
    <>
      {api.map((api) => {
        return (
          <div className="item" key={api.id}>
            <img src={`${image_path}${api.poster_path}`} alt="" />
            <span>{api.title}</span>
            <Link to={`/desc/${api.id}`}>more</Link>
          </div>
        );
      })}
    </>
  );
};
export default Result;
