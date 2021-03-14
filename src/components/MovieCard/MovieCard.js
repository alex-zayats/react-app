import React from 'react';
import './MovieCard.scss';

import PropTypes from 'prop-types';

export function MovieCard(props) {
  const {title, year, category} = props.movie;

  return (
    <div className="movie-card">
      <div className="movie-image"></div> 
      <p className="movie-year">{year}</p>
      <p className="movie-title">{title}</p>
      <p className="movie-category">{category}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}
