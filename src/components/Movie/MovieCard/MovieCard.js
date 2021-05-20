import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieActionsIcon } from 'src/components/Movie/MovieActionsIcon';
import { MovieActionsMenu } from 'src/components/Movie/MovieActionsMenu';

import styles from './MovieCard.module.scss';

export function MovieCard(props) {
  const { id, title, release_date, poster_path, genres } = props.movie;  
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
  };

  return (
    <div className={styles['movie-card']} onClick={onCardClick}>
      <img className={styles['movie-image']} src={poster_path} alt={title} />

      <div className={styles['actions-container']} onClick={(event) => { event.stopPropagation(); }}>
        <MovieActionsIcon>
          <MovieActionsMenu movieId={id} />
        </MovieActionsIcon>
      </div>

      <p className={styles['movie-year']}>{releaseDate.getFullYear()}</p>
      <p className={styles['movie-title']}>{title}</p>
      <p className={styles['movie-category']}>{shortedGenres.join(', ')}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired
  }).isRequired
};
