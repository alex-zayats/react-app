import * as types from 'src/actions/actionTypes';

const initialState = {
  details: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIE_DETAILS:
      return  {
        ...state,
        details: {...action.payload}
      };

    case types.SET_MOVIE_DETAILS_LOADING:
      return  {
        ...state,
        isLoading: action.payload
      };
      
    case types.DELETE_MOVIE:
      return state; 

    default:
     return state;
  }
}
