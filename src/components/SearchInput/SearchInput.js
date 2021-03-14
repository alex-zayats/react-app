import React from 'react';
import './SearchInput.scss';

export function SearchInput() {
  return (
    <>
      <input className="search-input" type="text" name="movie-name"></input>
      <button className="search-button" type="button">Search</button>
    </>
  );
}
