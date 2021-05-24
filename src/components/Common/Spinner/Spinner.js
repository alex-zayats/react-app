import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.scss';

export function Spinner({ isLoading }) {
  return (
    isLoading ? <p className={styles['loading-text']}>Data is loading...</p> : null
  );
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
