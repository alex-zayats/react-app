import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesSort.scss';

export function MoviesSort({updateSort}) {
  const [currentSort, setCurrentSort] = useState('title');

  const sortTypes = {
    'year': 'Release date',
    'title': 'Title',
    'category': 'Category'
  };

  const handleChangeSort = (event) => {
    setCurrentSort(event.target.value);
    updateSort(event.target.value);
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

MoviesSort.propTypes = {
  updateSort: PropTypes.func
}
