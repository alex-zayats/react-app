import React from 'react';
import './Spinner.scss';

export function Spinner({isLoading}) {
  return (
    isLoading ? <p className="loading-text">Data is loading...</p> : null
  );
}
