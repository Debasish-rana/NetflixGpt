import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMoviesData } from "../../utils/movieSlice";
import { API_OPTION, topratedMoviesApi } from "../../utils/Constants";

const useTopratedMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
 getTopratedMoviesData();
  }, []);
  const getTopratedMoviesData = async () => {
    const data = await fetch(topratedMoviesApi, API_OPTION);
    const json = await data.json();
    //     console.log(json);
    dispatch(addTopratedMoviesData(json.results));
  };
  return <div></div>;
};

export default useTopratedMovie;
