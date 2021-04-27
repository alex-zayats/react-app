import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies, getMovieDetails, updateMovieDetails } from 'src/actions';
import { Modal } from 'src/components/Common/Modal';
import { Spinner } from 'src/components/Common/Spinner';
import { EditMovieForm } from 'src/components/Movie/EditMovieForm';

export function EditMovieModal({movieId, isModalOpened, closeModal}) {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movie.details);
  const isLoading = useSelector(state => state.movie.isLoading);

  const onFormSubmit = (updatedMovieDetails) => {
    dispatch(updateMovieDetails(updatedMovieDetails));
    dispatch(getMovies());
    closeModal();
  }

  useEffect(() => {
    if (isModalOpened) {
      dispatch(getMovieDetails(movieId));
    }
  }, [movieId, isModalOpened]);

  return (
    <Modal title="Really edit?!" isModalOpened={isModalOpened} closeModal={closeModal}>
      <Spinner isLoading={isLoading}></Spinner>
      {!isLoading && <EditMovieForm movieDetails={movieDetails} onFormSubmit={onFormSubmit}></EditMovieForm>}
    </Modal>
  );
}

EditMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
