import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative pl-10 z-20 ">
        <MovieList
          movies={movies.nowPlayingMovies}
          title={"Now playing movies"}
        />
        <MovieList
          movies={movies.topratedMovies}
          title={"Top rated movies"}
        />
        <MovieList movies={movies.popularMovies} title={"Popular movies"} />
        <MovieList movies={movies.nowPlayingMovies} title={"Upcoming movies"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
