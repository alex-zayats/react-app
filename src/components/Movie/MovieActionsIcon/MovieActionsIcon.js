import React from 'react';
import './MovieActionsIcon.scss';

import { ActionsIcon } from 'src/components/Common/ActionsIcon';

export function MovieActionsIcon({children}) {
  return (
    <ActionsIcon className="movie-actions-icon">
      {children}
    </ActionsIcon>
  );
}
