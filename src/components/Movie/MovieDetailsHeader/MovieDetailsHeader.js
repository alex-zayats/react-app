import React from 'react';
import { Header } from 'src/components/Common/Header';

import styles from './MovieDetailsHeader.module.scss';

export function MovieDetailsHeader({ children }) {
  return (
    <Header className={styles['details-header']}>
      {children}
    </Header>
  );
}
