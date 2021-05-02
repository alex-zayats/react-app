import React from 'react';
import { connect } from 'react-redux';
import './MovieDetails.scss';

function MovieDetails({movieDetails}) {
  const {release_date = 'Unknown', title, overview, vote_average} = movieDetails;

  return (
    <div className="movie-details">
      <div className="movie-image"></div>

      <div className="movie-title-wrapper">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-rating">{vote_average}</p>
      </div>

      <h4 className="movie-year">{release_date}</h4>
      <p className="movie-category">{overview}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieDetails: state.movie.details
});

const connectedMovieDetails = connect(mapStateToProps)(MovieDetails);
// export default connect(mapStateToProps)(MovieDetails);
export {connectedMovieDetails as MovieDetails};
