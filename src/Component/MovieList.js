import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  //console.log(movies[0].poster_path);

  return (
    movies && (
      <div className="flex flex-nowrap overflow-x-scroll  p-3 scrollbar-hide">
        <div className="">
          <p className="text-white text-2xl font-bold px-3 py-3" >{title}</p>
          <div className="flex w-[3000px]  bg-black">
            {movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
