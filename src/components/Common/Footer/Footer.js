import React from 'react';
import styles from './Footer.module.scss';

export function Footer(props) {
  const { children } = props;

  return (
    <footer className={styles['main-footer']}>
      {children}
    </footer>
  );
}
