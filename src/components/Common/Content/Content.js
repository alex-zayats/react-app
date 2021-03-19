import React from 'react';
import './Content.scss';

export function Content({children}) {
  return (
    <div className="content">
      {children}
    </div>
  );
}
