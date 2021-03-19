import React from 'react';
import './Header.scss';

export function Header(props) {
  return (
    <>
      <header className="main-header">
        {props.children}
      </header>
    </>
  );
}
