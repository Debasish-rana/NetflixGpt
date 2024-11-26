import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesTrailer } from "../../utils/movieSlice";
import { API_OPTION } from "../../utils/Constants";

const useMovieTailerVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    moviesTailer();
  }, []);

  const moviesTailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const moviesTailerLength = filterData.length
      ? filterData[0]
      : json.result[0];
    dispatch(addNowPlayingMoviesTrailer(moviesTailerLength));
  };
  return <div></div>;
};

export default useMovieTailerVideo;
