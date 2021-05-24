import React from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from 'src/components/Movie/MovieForm';

export function EditMovieForm({ movieDetails, onFormSubmit = () => {} }) {
  const handleFormSubmit = (formValues) => {
    onFormSubmit(formValues);
  };

  return (
    <MovieForm movieDetails={movieDetails} onFormSubmit={handleFormSubmit} />
  );
}

EditMovieForm.propTypes = {
  movieDetails: PropTypes.object
};
