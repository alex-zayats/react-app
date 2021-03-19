import React from 'react';
import PropTypes from 'prop-types';

import { ActionsMenu } from 'src/components/Common/ActionsMenu';
import { Modal } from 'src/components/Common/Modal';
import { EditMovieModal  } from 'src/components/Movie/EditMovieModal';
import { useToggleModal } from 'src/hooks.js';

export function MovieActionsMenu({movieId}) {
  const [isEditModalOpened, setIsEditModalOpened] = useToggleModal();
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useToggleModal();

  const movieMenuActions = [
    {
      title: 'Edit',
      handler: () => {
        setIsEditModalOpened(true);
      }
    },
    {
      title: 'Delete',
      handler: () => {
        setIsDeleteModalOpened(true);
      }
    }
  ];

  return (
    <>
      <ActionsMenu items={movieMenuActions}></ActionsMenu>
      <EditMovieModal movieId={movieId} isModalOpened={isEditModalOpened} closeModal={() => setIsEditModalOpened(false)}></EditMovieModal>
      <Modal title='Really delete?!' isModalOpened={isDeleteModalOpened} closeModal={() => setIsDeleteModalOpened(false)}>
        <p>Hello text </p><a href="/">here</a>
      </Modal>
    </>
  )
}

MovieActionsMenu.propTypes = {
  movieId: PropTypes.number.isRequired
}