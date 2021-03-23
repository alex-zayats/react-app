import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'src/components/Common/Modal';
import { AddMovieForm } from 'src/components/Movie/AddMovieForm';

export function AddMovieModal({isModalOpened, closeModal}) {
  return (
    <Modal title="Really add?!" isModalOpened={isModalOpened} closeModal={closeModal}>
      <AddMovieForm></AddMovieForm>
    </Modal>
  );
}

AddMovieModal.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
