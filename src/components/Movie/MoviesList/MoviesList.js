var _ = require('lodash/core');
import React, { useState } from 'react';
import './MoviesList.scss';

import { Spinner } from 'src/components/Common/Spinner';
import { MovieCard } from 'src/components/Movie/MovieCard';

export function MoviesList({sortBy, category}) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000); // will be moved to api

  const movies = [
    {
      id: 1,
      title: 'Terminator',
      category: 'comedy',
      year: 2005
    },
    {
      id: 2,
      title: 'Bohemian Rapsody',
      category: 'horror',
      year: 2003
    },
    {
      id: 3,
      title: 'Pirrates of Carrebian Sea 3',
      category: 'comedy',
      year: 2011
    },
    {
      id: 4,
      title: 'Pirrates of Carrebian Sea',
      category: 'horror',
      year: 2007
    },
    {
      id: 5,
      title: 'Pirrates of Carrebian Sea 2',
      category: 'comedy',
      year: 2009
    }
  ];

  const getMovies = (sortBy, category) => {
    return _.sortBy(movies, sortBy)
      .filter(movie => category == 'All' || movie.category.toLowerCase() == category.toLowerCase())
      .map(movie => <MovieCard movie={movie} key={movie.title}/>)
  }

  const showMovies = () => {
    const movies = getMovies(sortBy, category);
    return (movies.length > 0) 
      ? movies
      : <h4 className="movies-not-found">Sorry, not found movies for such category</h4>
  }

  return (
    <>
      <Spinner isLoading={isLoading}/>
      <div className="movies-list">
        {showMovies()}
      </div>
    </>
  );
}
