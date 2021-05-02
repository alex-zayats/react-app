import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.scss';

import { MovieActionsIcon } from '/src/components/Movie/MovieActionsIcon';
import { MovieActionsMenu } from '/src/components/Movie/MovieActionsMenu';

export function MovieCard(props) {
  const {id, title, release_date, poster_path, genres} = props.movie;  
  const urlHistory = useHistory();

  const releaseDate = new Date(release_date);
  let shortedGenres;

  if (genres.length > 2) {
    shortedGenres = genres.slice(0, 2);
    shortedGenres.push('etc.');
  } else {
    shortedGenres = genres;
  }

  const onCardClick = () => {
    urlHistory.push(`/movie-details/${id}`);
  }

  return (
    <div className="movie-card" onClick={onCardClick}>
      <img className="movie-image" src={poster_path}></img>

      <div className="actions-container" onClick={(event) => { event.stopPropagation(); }}>
        <MovieActionsIcon>
          <MovieActionsMenu movieId={id}></MovieActionsMenu>
        </MovieActionsIcon>
      </div>

      <p className="movie-year">{releaseDate.getFullYear()}</p>
      <p className="movie-title">{title}</p>
      <p className="movie-category">{shortedGenres.join(', ')}</p>
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
