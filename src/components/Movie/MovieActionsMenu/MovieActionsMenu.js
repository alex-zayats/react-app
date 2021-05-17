import React from 'react';
import PropTypes from 'prop-types';

import { ActionsMenu } from 'src/components/Common/ActionsMenu';
import { DeleteMovieModal  } from 'src/components/Movie/DeleteMovieModal';
import { EditMovieModal  } from 'src/components/Movie/EditMovieModal';
import { useToggleModal } from 'src/utils/hooks.js';

export function MovieActionsMenu({movieId}) {
  const [isEditModalOpened, toggleEditModalOpened] = useToggleModal();
  const [isDeleteModalOpened, toggleDeleteModalOpened] = useToggleModal();

  const movieMenuActions = [
    {
      title: 'Edit',
      handler: () => {
        toggleEditModalOpened();
      }
    },
    {
      title: 'Delete',
      handler: () => {
        toggleDeleteModalOpened();
      }
    }
  ];

  return (
    <>
      <ActionsMenu items={movieMenuActions}></ActionsMenu>
      <EditMovieModal movieId={movieId} isModalOpened={isEditModalOpened} closeModal={toggleEditModalOpened}></EditMovieModal>
      <DeleteMovieModal movieId={movieId} isModalOpened={isDeleteModalOpened} closeModal={toggleDeleteModalOpened}></DeleteMovieModal>
    </>
  )
}

MovieActionsMenu.propTypes = {
  movieId: PropTypes.number.isRequired
}