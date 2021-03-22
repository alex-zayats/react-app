import React from 'react';
import './Button.scss';

export function Button({className, children, ...props}) {
  return (
    <button className={className + " app-button"} type="button" {...props}>{children}</button>
  );
}
