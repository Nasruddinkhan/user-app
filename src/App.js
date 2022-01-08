import React, { useState } from "react";

import "./App.css";
import MoviesList from "./component/Movies/MoviesList ";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date,
          };
        });
        setMoviesList(transformedMovies);
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>data is loading</p>}
        {!isLoading && moviesList.length === 0 && <p>Found no movies.</p>}
        {!isLoading && <MoviesList movies={moviesList} />}
      </section>
    </React.Fragment>
  );
}

export default App;
