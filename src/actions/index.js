import apiService from 'src/api';
import * as types from './actionTypes';

/***********************  ACTIONS *********************************/

export const getMoviesAction = (movies) => ({
  type: types.GET_MOVIES,
  payload: movies
});

export const getMovieDetailsAction = (movieDetails) => ({
  type: types.GET_MOVIE_DETAILS,
  payload: movieDetails
});

export const setSortAction = (sort) => ({
  type: types.SET_SORT_BY,
  payload: sort
});

export const setCategoryAction = (category) => ({
  type: types.SET_CATEGORY,
  payload: category
});

/********************** EPIC ACTIONS ******************************/

export const getMovies = (sortBy) => (
  async (dispatch) => {
    const movies = await apiService.getMovies(sortBy);
    dispatch(getMoviesAction(movies));
  }
);

export const getMovieDetails = (movieId) => (
  async (dispatch) => {
    const movieDetails = await apiService.getMovieDetails(movieId);
    dispatch(getMoviesAction(movieDetails));
  }
);
