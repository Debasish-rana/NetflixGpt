import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { API_OPTION, useNowPlayingMoviesapi } from "../../utils/Constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    movieapi();
  }, []);
  const movieapi = async () => {
    const data = await fetch(useNowPlayingMoviesapi, API_OPTION);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  return <div></div>;
};

export default useNowPlayingMovies;
