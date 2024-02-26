/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import fetchData from '../../../services/api/call.api';

function EditAccount({ accountDetails, setAccountDetails, userId }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updatedAccountDetails, setUpdatedAccountDetails] = useState({});

  // if no userId or userId = main administrator, don't show the edit-account div
  if ((!userId) || parseInt(userId, 10) === 1) {
    return null;
  }

  // function to open a form to edit account
  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  // Function to handle keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleOpenForm();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Create an object with the updated account details
    const updatedData = {
      email: formData.get('email'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      birthdate: formData.get('birthdate'),
      address: formData.get('adress'),
      zipcode: formData.get('zipcode'),
      city: formData.get('city'),
      country: formData.get('country'),
    };

    // send updated account details to the API
    try {
      const responseData = await fetchData('PATCH', `users/${userId}`, updatedData, true);
      if (responseData) {
        setUpdatedAccountDetails(responseData);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour des informations du compte :', error);
      console.log('Une erreur est survenue lors de la mise à jour des informations du compte. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    // formatting the updated account and rerender the informations for Infos component
    if (Object.keys(updatedAccountDetails).length !== 0) {
      setAccountDetails(updatedAccountDetails[0]);
      setIsFormVisible(false);
      console.log('Les informations du compte ont été mises à jour avec succès!');
    }
  }, [updatedAccountDetails]);

  return (
    <div
      className="edit-account"
      aria-label="Edit Account"
      onClick={handleOpenForm}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {isFormVisible ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" defaultValue={accountDetails.email} />
          <input type="text" name="firstname" defaultValue={accountDetails.firstname} />
          <input type="text" name="lastname" defaultValue={accountDetails.lastname} />
          <input type="text" name="birthdate" defaultValue={accountDetails.birthdate} />
          <input type="text" name="adress" defaultValue={accountDetails.address} />
          <input type="text" name="zipcode" defaultValue={accountDetails.zipcode} />
          <input type="text" name="city" defaultValue={accountDetails.city} />
          <input type="text" name="country" defaultValue={accountDetails.country} />
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <>
          <FontAwesomeIcon icon={faUserPen} />
          <span className="edit-account-text">Modifier le compte</span>
        </>
      )}
    </div>
  );
}

export default EditAccount;
