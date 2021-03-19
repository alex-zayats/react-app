import React, { useEffect, useState } from 'react';
import './ActionsIcon.scss';

export function ActionsIcon({className, children}) {
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  
  const toggleActionsVisibility = (event) => {
    if (event.target.closest('.actions-icon')) {
      setIsActionsVisible(!isActionsVisible);
    }    
  }

  return (
    <div className={`actions-icon ${className} ${isActionsVisible ? 'opened' : ''}`} onClick={toggleActionsVisibility}>
      <div className="actions">
        {children}
      </div>
    </div>
  );
}
