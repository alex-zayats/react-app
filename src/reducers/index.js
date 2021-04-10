import { combineReducers } from 'redux';
import movie from './moviesReducer';
import filter from './filterReducer';

export default combineReducers({
  movie,
  filter
});
