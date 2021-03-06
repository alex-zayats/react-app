import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getMovieDetails, getMovies } from 'src/actions';
import { Content } from 'src/components/Common/Content';
import { MovieDetailsHeader } from 'src/components/Movie/MovieDetailsHeader';
import { MovieDetails } from 'src/components/Movie/MovieDetails';
import { MoviesList } from 'src/components/Movie/MoviesList';
import { Button } from 'src/components/Common/Button';

import styles from './Details.module.scss';

function Details({movies, getMovieDetails, getMovies}) {
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id);
    if (movies.length == 0) {
      getMovies();
    } 
  }, [id]);
  

  return (
    <>
      <MovieDetailsHeader>
        <Content>
          <Link to="/">
            <Button className={styles['home-btn']}>Go to Home</Button>
          </Link> 
          <MovieDetails></MovieDetails>
        </Content>
      </MovieDetailsHeader>
      <Content>
        <h4 className={styles['more-banner']}>Other movies</h4>
        <MoviesList/>
      </Content>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  getMovies: () => dispatch(getMovies())
});

const mapStateToProps = (state) => ({
  movies: state.movies.list
});

const connectedDetails = connect(mapStateToProps, mapDispatchToProps)(Details);
// export default connect(null, mapDispatchToProps)(Details);
export {connectedDetails as Details};
