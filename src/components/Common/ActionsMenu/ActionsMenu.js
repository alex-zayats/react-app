import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionsMenu.module.scss';

export function ActionsMenu({items}) {
  return (
    <div className={styles['actions-menu']}>
      {
        items.map(({title, handler}) => (
          <div
            className={styles['action-item']}
            onClick={handler}
            key={title}
            >
            {title}
          </div>
        ))
      }
    </div>
  );
}

ActionsMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      handler: PropTypes.func.isRequired
    })
  ).isRequired
}
