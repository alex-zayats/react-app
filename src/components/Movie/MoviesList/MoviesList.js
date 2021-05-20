import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MovieCard } from 'src/components/Movie/MovieCard';
import { Spinner } from 'src/components/Common/Spinner';

import styles from './MoviesList.module.scss';

function MoviesList({ movies, isLoading }) {
  const getMovieCards = () => movies.map((movie) => <MovieCard movie={movie} key={movie.title} />);

  const showMovies = () => {
    const movieCards = getMovieCards();
    return (movieCards.length > 0) 
      ? <>{movieCards}</>
      : <h4 className={styles['movies-not-found']}>Sorry, not found movies for such category</h4>;
  };

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className={styles['movies-list']}>
        {!isLoading && showMovies()}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies.list,
  isLoading: state.movies.isLoading,
});

const connectedMoviesList = connect(mapStateToProps)(MoviesList);
// export default connect(mapStateToProps)(MoviesList);
export { connectedMoviesList as MoviesList };
