import React from 'react';

const FavoriteMovies = ({ movies, onSelectMovie }) => {
  return (
    <div className="favorite-movies">
      <h2>Favorite Movies</h2>
      {movies.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => onSelectMovie(movie)}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;