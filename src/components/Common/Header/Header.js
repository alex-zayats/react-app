import React from 'react';
import './Header.scss';

export function Header({className = 'main-header', children}) {
  return (
    <header className={className}>
      {children}
    </header>
  );
}
