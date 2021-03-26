import React from 'react';
import './Header.scss';

export function Header({children}) {
  return (
    <header className="main-header">
      {children}
    </header>
  );
}
