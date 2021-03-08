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

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className="movies-list">
        <MovieCard name="test"  category="horror" />
        <MovieCard name="test1" category="comedy" />
        <MovieCard name="test2" category="horror" />
        <MovieCard name="test3" category="comedy" />
      </div>
    </>
  );
}
