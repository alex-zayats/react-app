import React from 'react';
import './SearchInput.scss';

import { Button } from '@material-ui/core';

export function SearchInput() {
  return (
    <>
      <input className="search-input" type="text" name="movie-name"></input>
      <Button variant="contained" color="primary">Search</Button>
    </>
  );
}
