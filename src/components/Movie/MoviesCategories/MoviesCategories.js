import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from 'src/actions';

import styles from './MoviesCategories.module.scss';

export function MoviesCategories() {
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.movies.category);
  
  const categories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.dataset.category));
  }

  return (
    <div className={styles['categories-wrapper']}>
      {
        categories.map(category => (
          <p className={styles['movie-category']}
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
