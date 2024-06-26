import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;