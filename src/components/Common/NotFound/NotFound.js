import React from 'react';
import styles from './NotFound.module.scss';

export function NotFound({ children }) {
  return (
    <>
      <h3 className={styles['not-found']}>Page not found!</h3>
      {children}
    </>
  );
}
