import React from 'react';
import './Spinner.scss';

export function Spinner(props) {
  return (
    <p>Is loading data: {props.isLoading.toString()}</p>
  );
}
