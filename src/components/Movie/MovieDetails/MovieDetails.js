import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';

import { useGetMovieDetails } from 'src/hooks.js';

export function MovieDetails({movieId}) {
  const [movieDetails] = useGetMovieDetails(movieId, true);
  const {year = 'Unknown', title, body, userId} = movieDetails;

  return (
    <div className="movie-details">
      <div className="movie-image"></div>

      <div className="movie-title-wrapper">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-rating">{userId}</p>
      </div>

      <h4 className="movie-year">{year}</h4>
      <p className="movie-category">{body}</p>
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired
}
