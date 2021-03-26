import React from 'react';
import PropTypes from 'prop-types';
import './MovieActionsIcon.scss';

import { ActionsIcon } from '/src/components/Common/ActionsIcon';

export function MovieActionsIcon({isVisible, children}) {
  return (
    <ActionsIcon className="movie-actions-icon" isVisible={isVisible}>
      {children}
    </ActionsIcon>
  );
}

MovieActionsIcon.propTypes = {
  isVisible: PropTypes.bool.isRequired
}
