import React from 'react';
import styles from './Spinner.module.scss';

export function Spinner({isLoading}) {
  return (
    isLoading ? <p className={styles['loading-text']}>Data is loading...</p> : null
  );
}
