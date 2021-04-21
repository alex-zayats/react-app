import React from 'react';
import { connect } from 'react-redux';
import './MoviesList.scss';

import { MovieCard } from 'src/components/Movie/MovieCard';

function MoviesList({movies}) {

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
  movies: state.movies.list
});

const connectedMoviesList = connect(mapStateToProps)(MoviesList);
// export default connect(mapStateToProps)(MoviesList);
export {connectedMoviesList as MoviesList};
