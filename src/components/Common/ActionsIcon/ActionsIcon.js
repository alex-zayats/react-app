import React, { useEffect, useState } from 'react';
import './ActionsIcon.scss';

export function ActionsIcon({className, isVisible, children}) {
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  
  const toggleActionsVisibility = (event) => {
    if (event.target.closest('.actions-icon')) {
      setIsActionsVisible(!isActionsVisible);
    }    
  }

  useEffect(() => {
    if (!isVisible) {
      setIsActionsVisible(false);
    }
  }, [isVisible]);

  return (
    <div className={`actions-icon ${className} ${isVisible ? 'visible' : ''}`} onClick={toggleActionsVisibility}>
      <div className={`actions ${isActionsVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
}
