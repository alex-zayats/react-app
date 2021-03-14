import React from 'react';
import './Spinner.scss';

export function Spinner({isLoading}) {
  return (
    isLoading ? <p>Data is loading...</p> : null
  );
}
