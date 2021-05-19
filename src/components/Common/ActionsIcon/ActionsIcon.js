import React, { useState } from 'react';
import styles from './ActionsIcon.module.scss';

export function ActionsIcon({className, children}) {
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  
  const toggleActionsVisibility = (event) => {
    if (event.target.closest(`.${styles['actions-icon']}`)) {
      setIsActionsVisible(!isActionsVisible);
    }    
  }
  
  return (
    <div className={`${styles['actions-icon']} ${className}`} onClick={toggleActionsVisibility}>
      <div className={`${styles['actions']} ${isActionsVisible ? styles['visible'] : ''}`}>
        {children}
      </div>
    </div>
  );
}
