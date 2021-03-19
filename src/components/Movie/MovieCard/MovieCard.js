import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

import { MovieActionsIcon } from '/src/components/Movie/MovieActionsIcon';
import { MovieActionsMenu } from '/src/components/Movie/MovieActionsMenu';

export function MovieCard(props) {
  const {id, title, year, category} = props.movie;
  const [actionsIconVisibility, setActionsIconVisibility] = useState(false);

  return (
    <div className="movie-card" onPointerEnter={() => setActionsIconVisibility(true)} onPointerLeave={() => setActionsIconVisibility(false)}>
      <div className="movie-image"></div>
      { actionsIconVisibility &&
        <MovieActionsIcon>
          <MovieActionsMenu movieId={id}></MovieActionsMenu>
        </MovieActionsIcon>
      }
      <p className="movie-year">{year}</p>
      <p className="movie-title">{title}</p>
      <p className="movie-category">{category}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}
