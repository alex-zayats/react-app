import React from 'react';
import './NotFound.scss';

export function NotFound({children}) {
  return (
    <>
      <h3 className="not-found">Page not found!</h3>
      {children}
    </>
  );
}
