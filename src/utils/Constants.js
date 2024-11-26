export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RiNmM5MTEzMjA3ZGZkOWU4OGM4NTcwNTlkYmRlYyIsIm5iZiI6MTczMTk4OTk2OS4zNTg3NDc1LCJzdWIiOiI2NzNiMmY2Mjc0YTJlNmUwMjM3YjYzMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ubDsPEtyEtjoloKen7CosNPx3FT1COFGShKqU8PEJ7g",
  },
};
export const bgImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/61b94313-a53b-4a73-b973-7632aafc9d8f/web_tall_panel/IN-en-20241104-TRIFECTA-perspective_5e478a9d-0baf-4a93-8987-7a8ebf6f7fe8_medium.jpg";
export const useNowPlayingMoviesapi =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const CDN_URL = "https://image.tmdb.org/t/p/w500";
export const usePopularMoviesApi =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const topratedMoviesApi =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const upcomingMovieApi = "https://api.themoviedb.org/3/movie/upcoming";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "bengali", name: "Bengali" },
  { identifier: "marathi", name: "Marathi" },
];
