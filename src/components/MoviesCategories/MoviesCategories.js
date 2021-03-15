import React, { useState, useEffect } from 'react';
import './MoviesCategories.scss';

import PropTypes from 'prop-types';

export function MoviesCategories({updateCategory}) {
  const [currentCategory, setCurrentCategory] = useState('All');
  
  const categories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const handleChangeCategory = (event) => {
    setCurrentCategory(event.target.dataset.category);
    updateCategory(event.target.dataset.category);
  }

  return (
    <div className="categories-wrapper">
      {
        categories.map(category => (
          <p className="movie-category"
             onClick={handleChangeCategory}
             key={category}
             data-category={category}
          >
            {category}
          </p>
        ))
      }
    </div>
  );
}

MoviesCategories.propTypes = {
  updateCategory: PropTypes.func
}
