/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import fetchData from '../../../services/api/call.api';
import DeleteModal from '../../../components/Common/Modal/Delete';

function DeleteAccount() {
  const token = localStorage.getItem('authApiToken');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  // if no userId or userId = main administrator, don't show the delete-account div
  if ((!userId) || parseInt(userId, 10) === 1) {
    return null;
  }

  const text = 'Voulez-Vous vraiment supprimer votre compte ?';

  // delete account, remove token from local storage and redirect to home page
  const deleteElement = async () => {
    const isDelete = await fetchData('DELETE', `users/${userId}`, null, true);
    localStorage.removeItem('authApiToken');
    window.location.href = '/';
    return isDelete;
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleConfirmDelete = async () => {
    const isDelete = await deleteElement();
    if (isDelete) {
      setIsDeleteModalVisible(false);
    }
  };

  DeleteModal(text, handleCloseDeleteModal, handleConfirmDelete);

  return (
    <>
      <div className="delete-account" aria-label="Delete Account" onClick={handleOpenDeleteModal}>
        <FontAwesomeIcon
          icon={faTrashCan}
        />
        <span className="delete-account-text">Supprimer le compte</span>
      </div>
      {isDeleteModalVisible
      && (
        <DeleteModal
          handleClose={handleCloseDeleteModal}
          handleConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default DeleteAccount;
