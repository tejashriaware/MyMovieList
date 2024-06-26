import React from 'react';

function MovieItem({ movie, onMovieSelect, onAddFavorite }) {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <button onClick={() => onMovieSelect(movie)}>View Details</button>
      <button onClick={() => onAddFavorite(movie)}>Add to Favorites</button>
    </div>
  );
}

export default MovieItem;