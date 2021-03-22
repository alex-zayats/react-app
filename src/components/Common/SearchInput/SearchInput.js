import React from 'react';
import './SearchInput.scss';

import { Button } from '/src/components/Common/Button';

export function SearchInput() {
  return (
    <>
      <input className="search-input" type="text" name="movie-name"></input>
      <Button className="search-button">Search</Button>
    </>
  );
}
