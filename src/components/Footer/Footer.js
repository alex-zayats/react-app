import React from 'react';
import './Footer.scss';

export function Footer(props) {
  const {children} = props;

  return (
    <footer>
      {children}
    </footer>
  );
}
