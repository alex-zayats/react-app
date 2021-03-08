import React from 'react';
import './MovieCard.scss';

import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';

export function MovieCard(props) {
  return (
    <Card className="movie-card">
      <p className="movie-title">{props.name}</p>
      <p className="movie-category">{props.category}</p>
    </Card>
  );
}

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}
