/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import './index.css';

// Composant de la modal d'erreur
function ErrorModal({ isOpen, message, onRequestClose }) {
  return (
    <Modal
      className="modal_contact"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Error Modal"
      appElement={document.getElementById('root')}
    >
      <h2 className="h2_contact_modal">Erreur</h2>
      <p className="message_contact_modal">{message}</p>
      <button className="button_contact_modal" type="submit" onClick={onRequestClose}>Fermer</button>
    </Modal>
  );
}

export default ErrorModal;
