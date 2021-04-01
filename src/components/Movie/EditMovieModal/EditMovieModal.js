import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'src/components/Common/Modal';
import { Spinner } from 'src/components/Common/Spinner';
import { EditMovieForm } from 'src/components/Movie/EditMovieForm';
import { useGetMovieDetails } from 'src/hooks.js';

export function EditMovieModal({movieId, isModalOpened, closeModal}) {
  const [movieDetails, isLoading] = useGetMovieDetails(movieId, isModalOpened);

  return (
    <Modal title="Really edit?!" isModalOpened={isModalOpened} closeModal={closeModal}>
      <Spinner isLoading={isLoading}></Spinner>
      {movieDetails && <EditMovieForm movieDetails={movieDetails}></EditMovieForm>}
    </Modal>
  );
}

EditMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
