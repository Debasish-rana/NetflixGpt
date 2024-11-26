import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, usePopularMoviesApi } from "../../utils/Constants";
import { addPopularMovies } from "../../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMoviesData();
  }, []);
  const getPopularMoviesData = async () => {
    const data = await fetch(usePopularMoviesApi, API_OPTION);
    const json = await data.json();
//     console.log(json);
    dispatch(addPopularMovies(json.results));
  };
  return <div></div>;
};

export default usePopularMovies;
