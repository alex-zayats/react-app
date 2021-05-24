import React from 'react';
import PropTypes from 'prop-types';

import { ActionsMenu } from 'src/components/Common/ActionsMenu';
import { DeleteMovieModal } from 'src/components/Movie/DeleteMovieModal';
import { EditMovieModal } from 'src/components/Movie/EditMovieModal';
import { useToggleModal } from 'src/utils/hooks';

export function MovieActionsMenu({ movieId }) {
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
      <ActionsMenu items={movieMenuActions} />
      <EditMovieModal
        movieId={movieId}
        isModalOpened={isEditModalOpened}
        closeModal={toggleEditModalOpened}
      />
      <DeleteMovieModal
        movieId={movieId}
        isModalOpened={isDeleteModalOpened}
        closeModal={toggleDeleteModalOpened}
      />
    </>
  );
}

MovieActionsMenu.propTypes = {
  movieId: PropTypes.number.isRequired
};
