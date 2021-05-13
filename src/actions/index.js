import apiService from 'src/utils/api';
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

export const deleteMovieAction = (movieId) => ({
  type: types.DELETE_MOVIE,
  payload: null
});

export const setMovieDetailsLoadingAction = (isLoading) => ({
  type: types.SET_MOVIE_DETAILS_LOADING,
  payload: isLoading
});

export const setSearchAction = (search) => ({
  type: types.SET_SEARCH_BY,
  payload: search
});

export const setSortAction = (sort) => ({
  type: types.SET_SORT_BY,
  payload: sort
});

export const setCategoryAction = (category) => ({
  type: types.SET_CATEGORY,
  payload: category
});

export const setMoviesLoadingAction = (isLoading) => ({
  type: types.SET_MOVIES_LOADING,
  payload: isLoading
});


/********************** EPIC ACTIONS ******************************/

export const setSearch = (search) => (
  async (dispatch, getState) => {
    if (getState().movies.searchBy !== search) {
      dispatch(setSortAction(search));
    }
    dispatch(getMovies());
  }
);

export const setSort = (sortBy) => (
  async (dispatch, getState) => {
    if (getState().movies.sortBy !== sortBy) {
      dispatch(setSortAction(sortBy));
      dispatch(getMovies());
    }
  }
);

export const setCategory = (category) => (
  async (dispatch, getState) => {
    if (getState().movies.category !== category) {
      dispatch(setCategoryAction(category));
      dispatch(getMovies());
    }
  }
);

export const getMovies = () => (
  async (dispatch, getState) => {
    dispatch(setMoviesLoadingAction(true));
    const movies = await apiService.getMovies(
      getState().movies.searchBy,
      getState().movies.sortBy,
      getState().movies.category
    );
    dispatch(getMoviesAction(movies));
    dispatch(setMoviesLoadingAction(false));
  }
);

export const getMovieDetails = (movieId) => (
  async (dispatch) => {
    dispatch(setMovieDetailsLoadingAction(true));
    const movieDetails = await apiService.getMovieDetails(movieId);
    dispatch(getMovieDetailsAction(movieDetails));
    dispatch(setMovieDetailsLoadingAction(false));
  }
);

export const updateMovieDetails = (movieDetails) => (
  async (dispatch) => {
    dispatch(setMovieDetailsLoadingAction(true));
    await apiService.updateMovieDetails(movieDetails);
    dispatch(getMovieDetailsAction(movieDetails));
    dispatch(setMovieDetailsLoadingAction(false));
  }
);

export const deleteMovie = (movieId) => (
  async () => {
    await apiService.deleteMovie(movieId);
  }
);
