import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/searchBar';
import FavoriteMovies from './components/FavoriteMovies';
import moviesData from './components/data';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleToggleFavorite = (movie) => {
    const updatedMovies = movies.map((m) => 
      m.id === movie.id ? { ...m, isFavorite: !m.isFavorite } : m
    );
    setMovies(updatedMovies);

    if (movie.isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, { ...movie, isFavorite: true }]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="logo">MyMovieList</div>
          <SearchBar onSearch={handleSearch} />
          <div className="favorite-icon" onClick={() => setShowFavorites(!showFavorites)}>
            ❤
          </div>
        </div>
      </header>
      <main className="main">
        {showFavorites ? (
          <FavoriteMovies movies={favorites} onSelectMovie={handleSelectMovie} />
        ) : selectedMovie ? (
          <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <MovieList movies={filteredMovies} onSelectMovie={handleSelectMovie} onToggleFavorite={handleToggleFavorite} />
        )}
      </main>
    </div>
  );
}

export default App;