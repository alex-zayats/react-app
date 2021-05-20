import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies, deleteMovie } from 'src/actions';
import { Modal } from 'src/components/Common/Modal';
import { Button } from 'src/components/Common/Button';

export function DeleteMovieModal({ movieId, isModalOpened, closeModal }) {
  const dispatch = useDispatch();

  const onDeleteButtonClick = (deleteMovieId) => {
    dispatch(deleteMovie(deleteMovieId))
      .then(() => dispatch(getMovies()))
      .then(() => closeModal());
  };

  return (
    <Modal title="Really delete?!" isModalOpened={isModalOpened} closeModal={closeModal}>
      {movieId && <Button onClick={() => onDeleteButtonClick(movieId)}>Delete</Button>}
    </Modal>
  );
}

DeleteMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};
