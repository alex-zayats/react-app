import React from 'react';
import './Container.scss';

export function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}
