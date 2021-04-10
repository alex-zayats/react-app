import * as types from 'src/actions/actionTypes';

const initialState = {
  list: [],
  details: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        list: [...action.payload]
      };

    case types.GET_MOVIE_DETAILS:
      return  {
        ...state,
        details: {...action.payload}
      };

    default:
     return state;
  }
}
