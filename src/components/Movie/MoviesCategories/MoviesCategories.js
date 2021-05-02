import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MoviesCategories.scss';

import { setCategory } from 'src/actions';

export function MoviesCategories() {
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.movies.category);
  
  const categories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.dataset.category));
  }

  return (
    <div className="categories-wrapper">
      {
        categories.map(category => (
          <p className="movie-category"
             onClick={handleChangeCategory}
             key={category}
             data-category={category}
             data-selected={category == currentCategory}
            >
            {category}
          </p>
        ))
      }
    </div>
  );
}
