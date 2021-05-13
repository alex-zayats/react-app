import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'src/actions';
import * as types from 'src/actions/actionTypes';

import { movieDetailsStub } from 'src/__stubs__/main.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('src/utils/api');

const initialState = {
  details: {},
  isLoading: false
};

describe('movie actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should get movie details action', () => {
    const movieDetails = movieDetailsStub;
    const expectedAction = {
      type: types.GET_MOVIE_DETAILS,
      payload: movieDetails
    }

    expect(actions.getMovieDetailsAction(movieDetails)).toEqual(expectedAction);
  });

  it('should get movie details epic action', () => {
    const expectedActions = [
      { 
        type: types.SET_MOVIE_DETAILS_LOADING,
        payload: true
      },
      {
        type: types.GET_MOVIE_DETAILS,
        payload: movieDetailsStub
      },
      {
        type: types.SET_MOVIE_DETAILS_LOADING,
        payload: false
      }
    ];

    return store.dispatch(actions.getMovieDetails(movieDetailsStub.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});