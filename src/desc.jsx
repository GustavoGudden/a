import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apikey } from "./config/ApiKey";
import "./desc.css";
import { Link } from "react-router-dom";
const Desc = () => {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  const { id } = useParams();
  const [movie, setapi] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          data_lançamento: release_date,
        };
        console.log(data);
        setapi(movie);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="movie">
        <img src={movie.image} alt="teste" />
        <div className="detales">
          <h1>{movie.title}</h1>
          <span>{movie.sinopse}</span>
          <span className="da">release_data:{movie.data_lançamento}</span>
          <Link to="/">
            <button className="btn">voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desc;
