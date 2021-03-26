import React from 'react';
import PropTypes from 'prop-types';
import './ActionsMenu.scss';

export function ActionsMenu({items}) {
  return (
    <div className="actions-menu">
      {
        items.map(({title, handler}) => (
          <div
            className="action-item"
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
