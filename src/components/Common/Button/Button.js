import React from 'react';
import styles from './Button.module.scss';

export function Button({ className = '', children, ...props }) {
  return (
    <button className={`${className} ${styles['app-button']}`} type="button" {...props}>{children}</button>
  );
}
