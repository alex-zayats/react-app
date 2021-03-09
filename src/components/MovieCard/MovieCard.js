import React from 'react';
import './MovieCard.scss';

import PropTypes from 'prop-types';

export function MovieCard(props) {
  const {name, year, category} = props;

  return (
    <div className="movie-card">
      <div className="movie-image"></div> 
      <p className="movie-year">{year}</p>
      <p className="movie-title">{name}</p>
      <p className="movie-category">{category}</p>
    </div>
  );
}

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}
