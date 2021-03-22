import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'src/components/Common/Modal';
import { EditMovieForm } from 'src/components/Movie/EditMovieForm';

export function AddMovieModal({isModalOpened, closeModal}) {
  return (
    <Modal title="Really add?!" isModalOpened={isModalOpened} closeModal={closeModal}>
      <EditMovieForm movieDetails={{}}></EditMovieForm>
    </Modal>
  );
}

AddMovieModal.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
