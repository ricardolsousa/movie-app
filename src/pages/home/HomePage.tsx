import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/interfaces";

const Homepage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=96f2acc3996df9198e317b966b9ed339";
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios.get(API_URL).then((resp) => setMovies(resp.data.results));
  }, []);

  return (
    <div>
      <div className="movies-list-container">
        {movies.map((movie) => (
          <div
            style={{ width: "25%", cursor: "pointer" }}
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <div className="film-card">
              <div style={{ position: "relative" }}>
                <img
                  className="film-card-image"
                  src={API_IMG + movie.poster_path}
                  alt=""
                />
                <div className="film-overview">
                  <p style={{ color: "white" }}>{movie.overview}</p>
                </div>
              </div>
              <p style={{ color: "white" }}>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
