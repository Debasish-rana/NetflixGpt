import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION, upcomingMovieApi } from '../../utils/Constants';
import { addTopratedMoviesData } from '../../utils/movieSlice';

const useUpcomingMovie = () => {
const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMoviesData();
  }, []);
  const getUpcomingMoviesData = async () => {
    const data = await fetch(upcomingMovieApi, API_OPTION);
    const json = await data.json();
//     console.log(json);
    dispatch(addTopratedMoviesData(json.results));
  };
  return (
    <div>
      
    </div>
  )
}

export default useUpcomingMovie
