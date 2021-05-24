import React from 'react';
import { ActionsIcon } from 'src/components/Common/ActionsIcon';

import styles from './MovieActionsIcon.module.scss';

export function MovieActionsIcon({ children }) {
  return (
    <ActionsIcon className={styles['movie-actions-icon']}>
      {children}
    </ActionsIcon>
  );
}
