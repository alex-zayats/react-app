import React from 'react';

import PropTypes from 'prop-types';
import './SearchInput.scss';

import { Button } from 'src/components/Common/Button';

export function SearchInput({value = '', onChange, onSubmit}) {
  return (
    <>
      <input className="search-input" type="text" onChange={(event) => onChange(event.currentTarget.value)} value={value}></input>
      <Button className="search-button" onClick={() => onSubmit(value)}>Search</Button>
    </>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

