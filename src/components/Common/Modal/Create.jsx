/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './modal.css';

function CreateModal({
  children, handleClose,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return isVisible ? (
    <div className="modal" aria-label="Close modal" onClick={handleModalClick}>
      <div className="modal-content modal-style-create">
        <button
          type="button"
          className="close close-modal-btn"
          aria-label="Close modal"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="modal__title">AJOUTER</h2>
        <div className="modal__body">
          {React.cloneElement(children, { handleClose })}
        </div>
      </div>
    </div>
  ) : null;
}

export default CreateModal;
