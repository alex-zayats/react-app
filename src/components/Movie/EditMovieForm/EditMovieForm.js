import React from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from '/src/components/Movie/MovieForm';

export function EditMovieForm({movieDetails}) {
  const onFormSubmit = (formValues) => {
    console.log('edit movie values:' + formValues);
  }

  return (
    <MovieForm movieDetails={movieDetails} onFormSubmit={onFormSubmit}></MovieForm>
  );
}

EditMovieForm.propTypes = {
  movieDetails: PropTypes.object
}
