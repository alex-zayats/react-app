import React from 'react';
import { connect } from 'react-redux';

import { MovieCard } from 'src/components/Movie/MovieCard';
import { Spinner } from 'src/components/Common/Spinner';

import styles from './MoviesList.module.scss';

function MoviesList({movies, isLoading}) {

  const getMovieCards = () => {
    return movies.map(movie => <MovieCard movie={movie} key={movie.title}/>)
  }

  const showMovies = () => {
    const movieCards = getMovieCards();
    return (movieCards.length > 0) 
      ? <>{movieCards}</>
      : <h4 className={styles['movies-not-found']}>Sorry, not found movies for such category</h4>
  }

  return (
    <>
     <Spinner isLoading={isLoading}></Spinner>
     <div className={styles['movies-list']}>
      {!isLoading && showMovies()}
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies.list,
  isLoading: state.movies.isLoading,
});

const connectedMoviesList = connect(mapStateToProps)(MoviesList);
// export default connect(mapStateToProps)(MoviesList);
export {connectedMoviesList as MoviesList};
