import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const modalWrapperId = 'main-modal-wrapper';

export function Modal({title, isModalOpened, closeModal, children}) {
  const modalElem = typeof document != 'undefined' && document.getElementById(modalWrapperId);

  return isModalOpened && ReactDOM.createPortal(
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-overlay']} onClick={closeModal}></div>
        <div className={styles['modal']}>
          <h4 className={styles['modal-title']}>{title.toUpperCase()}</h4>
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
