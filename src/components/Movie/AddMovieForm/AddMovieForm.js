import React from 'react';

import { MovieForm } from '/src/components/Movie/MovieForm';

export function AddMovieForm() {
  const onFormSubmit = (formValues) => {
    console.log('add movie values' + formValues);
  }

  const movieEmptyDetails = {
    id: -1,
    title: '',
    body: ''
  }

  return (
    <MovieForm movieDetails={movieEmptyDetails} onFormSubmit={onFormSubmit}></MovieForm>
  );
}
