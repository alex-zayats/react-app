import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchAction, setSearch } from 'src/actions';
import { SearchInput } from 'src/components/Common/SearchInput';

export function MovieSearchInput() {
  const dispatch = useDispatch();
  const currentSearch = useSelector(state => state.movies.searchBy);

  const onSearchSubmit = (submittedSearch) => {
    dispatch(setSearch(submittedSearch));
  }

  const onChangeSearch = (updatedSearch) => {
    dispatch(setSearchAction(updatedSearch));
  }

  return (
    <SearchInput value={currentSearch} onSubmit={onSearchSubmit} onChange={onChangeSearch}/>    
  );
}
