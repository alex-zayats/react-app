import React from 'react';
import styles from './Header.module.scss';

export function Header({className = styles['main-header'], children}) {
  return (
    <header className={`${styles['header']} ${className}`}>
      {children}
    </header>
  );
}
