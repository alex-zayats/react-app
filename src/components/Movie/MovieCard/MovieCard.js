import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.scss';

import { MovieActionsIcon } from '/src/components/Movie/MovieActionsIcon';
import { MovieActionsMenu } from '/src/components/Movie/MovieActionsMenu';

export function MovieCard(props) {
  const {id, title, year, category} = props.movie;
  const urlHistory = useHistory();

  const onCardClick = () => {
    urlHistory.push(`/movie-details/${id}`);
  }

  return (
    <div className="movie-card"
         onClick={onCardClick}>
      <div className="movie-image"></div>

      <div className="actions-container" onClick={(event) => { event.stopPropagation(); }}>
        <MovieActionsIcon>
          <MovieActionsMenu movieId={id}></MovieActionsMenu>
        </MovieActionsIcon>
      </div>

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
    genres: PropTypes.array.isRequired,
    release_date: PropTypes.string.isRequired
  }).isRequired
}
