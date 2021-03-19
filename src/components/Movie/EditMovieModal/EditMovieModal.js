import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'src/components/Common/Modal';
import { useGetMovieDetails } from 'src/hooks.js';

export function EditMovieModal({movieId, isModalOpened, closeModal}) {
  const movieDetails = useGetMovieDetails(movieId, isModalOpened);

  return (
    <Modal title='Really edit?!' isModalOpened={isModalOpened} closeModal={closeModal}>
      <p>{movieDetails[0] && movieDetails[0].id}</p>
      {/* <EditMovieForm movieDetails={movieDetails}></EditMovieForm> */}
    </Modal>
  );
}

EditMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
