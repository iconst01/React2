const API_KEY = "b492264e19168e4e04dfa64b9e187b6d";
const TMB_API_URL = "https://api.themoviedb.org/3/search/movie";

// Fetch movies from the API based on the search query
export const fetchMovies = async (query) => {
  const response = await fetch(`${TMB_API_URL}?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};

// Fetch movie details by ID
export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
