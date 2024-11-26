import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state, action)=>{
      state.popularMovies = action.payload;
    },
    addTopratedMoviesData:(state, action)=>{
      state.topratedMovies = action.payload;
    },
    addNowPlayingMoviesTrailer: (state, action) =>{
       state.addNowPlayingMoviesTrailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addNowPlayingMoviesTrailer,addPopularMovies,addTopratedMoviesData } = moviesSlice.actions;
export default moviesSlice.reducer;
