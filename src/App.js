import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import MoviesList from "./component/Movies/MoviesList ";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went wrong: ");
      const data = await response.json();

      const transformedMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date,
        };
      });
      setMoviesList(transformedMovies);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
 let content = <p>Found no movies.</p>;

 if (moviesList.length > 0) {
   content = <MoviesList movies={moviesList} />;
 }

 if (error) {
   content = <p>{error}</p>;
 }

 if (isLoading) {
   content = <p>Loading...</p>;
 }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      {/* <section>
        {!isLoading && moviesList.length > 0 && (
          <MoviesList movies={moviesList} />
        )}
        {isLoading && <p>data is loading</p>}
        {!isLoading && moviesList.length === 0 && !error && (
          <p>Found no movies.</p>
        )}
        {!isLoading && error && <p>{error.message}</p>}
      </section> */}
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
