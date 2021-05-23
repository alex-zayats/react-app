import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src/components/Common/Button';

import styles from './SearchInput.module.scss';

export function SearchInput({ value = '', onChange, onSubmit, label = 'Search' }) {
  return (
    <>
      <input className={styles['search-input']} type="text" onChange={(event) => onChange(event.currentTarget.value)} value={value} />
      <Button className={styles['search-button']} onClick={() => onSubmit(value)}>{label}</Button>
    </>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
