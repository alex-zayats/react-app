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
        <MovieCard name="Bohemian Rapsody"  category="horror" year={2003}/>
        <MovieCard name="Terminator" category="comedy" year={2005}/>
        <MovieCard name="Pirrates of Carrebian Sea" category="horror" year={2007}/>
        <MovieCard name="Pirrates of Carrebian Sea 2" category="comedy" year={2009}/>
      </div>
    </>
  );
}
