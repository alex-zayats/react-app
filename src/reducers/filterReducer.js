import * as types from 'src/actions/actionTypes';

const initialState = {
  sortBy: '',
  category: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };

    case types.SET_CATEGORY:
      return  {
        ...state,
        category: action.payload
      };

    default:
     return state;
  }
}
