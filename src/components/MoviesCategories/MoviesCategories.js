import React from 'react';
import './MoviesCategories.scss';

export function MoviesCategories() {
  return (
    <div className="movies-categories">
      <p className="movie-category">All</p>
      <p className="movie-category">Documentary</p>
      <p className="movie-category">Comedy</p>
      <p className="movie-category">Horror</p>
      <p className="movie-category">Crime</p>
    </div>
  );
}
