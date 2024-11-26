import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import { usePopularMoviesApi } from "../utils/Constants";
import useTopratedMovie from "./hooks/useTopratedMovie";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = () => {
  useNowPlayingMovies(); // all code use via useNowPlayingMovies
  usePopularMovies();
  useTopratedMovie();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="">
      <Header />
      {showGptSearch === true ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
