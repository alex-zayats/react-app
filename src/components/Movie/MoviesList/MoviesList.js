import React, { useState } from 'react';
import { connect } from 'react-redux';
import './MoviesList.scss';

import { getMovies } from 'src/actions';
import { MovieCard } from 'src/components/Movie/MovieCard';

function MoviesList({movies, sortBy, category, getMovies}) {

  useState(() => {
    console.log(sortBy);
    getMovies(sortBy);
  }, [sortBy, category]);

  const getMovieCards = () => {
    return movies.map(movie => <MovieCard movie={movie} key={movie.title}/>)
  }

  const showMovies = () => {
    const movieCards = getMovieCards();
    return (movieCards.length > 0) 
      ? <>{movieCards}</>
      : <h4 className="movies-not-found">Sorry, not found movies for such category</h4>
  }

  return (
    <div className="movies-list">
      {showMovies()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movie.list,
  sortBy: state.filter.sortBy,
  category: state.filter.category
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (sortBy) => dispatch(getMovies(sortBy))
});

const connectedMoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesList);
// export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
export {connectedMoviesList as MoviesList};
