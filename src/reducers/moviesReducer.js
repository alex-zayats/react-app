import * as types from 'src/actions/actionTypes';

const initialState = {
  list: [],
  searchBy: '',
  sortBy: 'title',
  category: 'All',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        list: [...action.payload]
      };

    case types.SET_SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload
      };

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

    case types.SET_MOVIES_LOADING:
      return  {
        ...state,
        isLoading: action.payload
      };    

    default:
     return state;
  }
}
