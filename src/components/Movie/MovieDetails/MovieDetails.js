import React from 'react';
import { connect } from 'react-redux';

import styles from './MovieDetails.module.scss';

function MovieDetails({movieDetails}) {
  const {release_date = 'Unknown', title, overview, vote_average} = movieDetails;

  return (
    <div className={styles['movie-details']}>
      <div className={styles['movie-image']}></div>

      <div className={styles['movie-title-wrapper']}>
        <h4 className={styles['movie-title']}>{title}</h4>
        <p className={styles['movie-rating']}>{vote_average}</p>
      </div>

      <h4 className={styles['movie-year']}>{release_date}</h4>
      <p className={styles['movie-category']}>{overview}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieDetails: state.movie.details
});

const connectedMovieDetails = connect(mapStateToProps)(MovieDetails);
// export default connect(mapStateToProps)(MovieDetails);
export {connectedMovieDetails as MovieDetails};
