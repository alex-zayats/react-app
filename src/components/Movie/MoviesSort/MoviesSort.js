import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MoviesSort.scss';

import { setSort } from 'src/actions';

export function MoviesSort() {
  const dispatch = useDispatch();
  const currentSort = useSelector(state => state.movies.sortBy);

  const sortTypes = {
    'release_date': 'Release date',
    'title': 'Title',
    'budget': 'Budget'
  };

  const handleChangeSort = (event) => {
    dispatch(setSort(event.target.value));
  }

  return (
    <div className="sort-wrapper">
      <p className="sort-title">Sort by</p>
      <select className="movies-sort" value={currentSort} onChange={handleChangeSort}>
        { Object.keys(sortTypes).map(sortType => <option value={sortType} key={sortType}>{sortTypes[sortType]}</option>) }
      </select>
    </div>
  );
}
