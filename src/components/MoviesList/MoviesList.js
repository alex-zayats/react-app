var _ = require('lodash/core');
import React, { useState, useEffect } from 'react';
import { Spinner } from '../Spinner';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export function MoviesList({sortBy, category}) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000); // will be moved to api

  useEffect(() => {
    console.log('sortBy changed: ' + sortBy);
  }, [sortBy]);

  useEffect(() => {
    console.log('category changed: ' + category);
  }, [category]);

  const movies = [
    {
      title: 'Terminator',
      category: 'comedy',
      year: 2005
    },
    {
      title: 'Bohemian Rapsody',
      category: 'horror',
      year: 2003
    },
    {
      title: 'Pirrates of Carrebian Sea 3',
      category: 'comedy',
      year: 2011
    },
    {
      title: 'Pirrates of Carrebian Sea',
      category: 'horror',
      year: 2007
    },
    {
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

  function showMovies() {
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
