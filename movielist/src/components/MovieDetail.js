import React from 'react';

function MovieDetail({ movie }) {
  return (
    <div className="movie-detail">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <p>Genre: {movie.genre}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
      <h3>Reviews</h3>
      <ul>
        {movie.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
