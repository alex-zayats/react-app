import React, { useState, useEffect } from 'react';
import { Spinner } from '../Spinner';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export function MoviesList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoading changed: ' + isLoading);
  });

  setTimeout(function() {
    setIsLoading(false);
  }, 2000);

  const movies = [
    {
      name: 'Bohemian Rapsody',
      category: 'horror',
      year: 2003
    },
    {
      name: 'Terminator',
      category: 'comedy',
      year: 2005
    },
    {
      name: 'Pirrates of Carrebian Sea',
      category: 'horror',
      year: 2007
    },
    {
      name: 'Pirrates of Carrebian Sea 2',
      category: 'comedy',
      year: 2009
    }
  ]

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className="movies-list">
        {movies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
      </div>
    </>
  );
}
