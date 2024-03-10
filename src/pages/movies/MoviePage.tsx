import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Movie } from "../../interfaces/interfaces";

const MoviePage = () => {
  const { movie_id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=96f2acc3996df9198e317b966b9ed339`
      )
      .then((resp) => setMovie(resp.data))
      .catch((error) => console.log(error));
  }, [movie_id]);
  return (
    <div className="movie-container">
      <div className="header-container">
        <span className="movie-title">{movie?.title}</span>
        <span className="rating-title">
          Rating:{" "}
          <span className="rating-vote">{movie?.vote_average} / 10</span>
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <img className="image" src={API_IMG + movie?.poster_path} alt="" />
          <div className="movie-information-container">
            <div style={{ display: "flex" }}>
              {/* Main Information Container */}
              <div className="main-information-container">
                <span className="container-title">Main Information</span>
                {/* Genres */}
                <div className="information-type-container">
                  <span className="information-type-title">Genre: </span>
                  <div className="information-type-list">
                    {movie?.genres?.map((g) => (
                      <span className="information-type-data">{g.name}</span>
                    ))}
                  </div>
                </div>
                {/* Translation */}
                <div className="information-type-container">
                  <span className="information-type-title">Translation: </span>
                  <div className="information-type-list">
                    {movie?.spoken_languages?.map((sl) => (
                      <span className="information-type-data">{sl.name}</span>
                    ))}
                  </div>
                </div>
                {/* Runtime */}
                <div className="information-type-container">
                  <span className="information-type-title">Runtime: </span>
                  <span className="information-type-data">
                    {movie?.runtime}
                  </span>
                </div>
                {/* Release Date */}
                <div className="information-type-container">
                  <span className="information-type-title">Year: </span>
                  <span className="information-type-data">
                    {movie?.release_date}
                  </span>
                </div>
              </div>
              {/* Other Information Container */}
              <div className="other-information-container">
                <span className="container-title">Other Information</span>

                {/* Producer */}
                <div className="information-type-container">
                  <span className="information-type-title">Producer: </span>
                  <div className="information-type-list">
                    {movie?.production_companies?.map((pc) => (
                      <span className="information-type-data">{pc.name}</span>
                    ))}
                  </div>
                </div>
                {/* Producer Companies */}
                <div className="information-type-container">
                  <span className="information-type-title">
                    Producer countries:{" "}
                  </span>
                  <div className="information-type-list">
                    {movie?.production_countries?.map((pc) => (
                      <span className="information-type-data">{pc.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Overview */}
            <span className="overview">{movie?.overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
