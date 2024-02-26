/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faShare } from '@fortawesome/free-solid-svg-icons';
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

  // console.log(updatedAccountDetails[0]);

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
        <form className="form-account" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" defaultValue={accountDetails.email} />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Prénom </label>
            <input type="text" id="firstname" name="firstname" defaultValue={accountDetails.firstname} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom </label>
            <input type="text" id="lastname" name="lastname" defaultValue={accountDetails.lastname} />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Date de naissance </label>
            <input type="text" id="birthdate" name="birthdate" defaultValue={accountDetails.birthdate} />
          </div>
          <div className="form-group">
            <label htmlFor="adress">Adresse </label>
            <input type="text" id="adress" name="adress" defaultValue={accountDetails.address} />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Code postal </label>
            <input type="text" id="zipcode" name="zipcode" defaultValue={accountDetails.zipcode} />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville </label>
            <input type="text" id="city" name="city" defaultValue={accountDetails.city} />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays </label>
            <input type="text" id="country" name="country" defaultValue={accountDetails.country} />
          </div>
          <button className="edit-button" type="submit">
            <FontAwesomeIcon className="icon-gretter-size" icon={faShare} />
            <span className="edit-account-text">Modifier le compte</span>
          </button>
        </form>
      ) : (
        <>
          <FontAwesomeIcon className="icon-gretter-size" icon={faUserPen} />
          <span className="edit-account-text">Modifier le compte</span>
        </>
      )}
    </div>
  );
}

export default EditAccount;
