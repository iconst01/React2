import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../api';

const MovieList = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      const movieResults = await fetchMovies(query);
      setMovies(movieResults || []); 
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>

      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      {movies.length > 0 && (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;

