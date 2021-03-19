import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const modalWrapperId = 'main-modal-wrapper';

export function Modal({title, isModalOpened, closeModal, children}) {
  const modalElem = document.getElementById(modalWrapperId);

  return isModalOpened && ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal">
          <h4 className="modal-title">{title.toUpperCase()}</h4>
          {children}
        </div>
      </div>,
      modalElem
    );
}

export function ModalWrapper() {
  return (
    <div id={modalWrapperId}></div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired
}
