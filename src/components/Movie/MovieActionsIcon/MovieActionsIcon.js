import React from 'react';
import PropTypes from 'prop-types';
import './MovieActionsIcon.scss';

import { ActionsIcon } from '/src/components/Common/ActionsIcon';

export function MovieActionsIcon({children}) {
  return (
    <ActionsIcon className="movie-actions-icon">
      {children}
    </ActionsIcon>
  );
}

MovieActionsIcon.propTypes = {
  isVisible: PropTypes.bool.isRequired
}
