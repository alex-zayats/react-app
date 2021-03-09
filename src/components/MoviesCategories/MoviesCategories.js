import React from 'react';
import './MoviesCategories.scss';

import PropTypes from 'prop-types';

export function MoviesCategories(props) {
  const {categories} = props;

  return (
    <div className="movies-categories">
      {categories.map((category, index) => <p className="movie-category" key={index}>{category}</p>)}
    </div>
  );
}

MoviesCategories.propTypes = {
  categories: PropTypes.array.isRequired
}
