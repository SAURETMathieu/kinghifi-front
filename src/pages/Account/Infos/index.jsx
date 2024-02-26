/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';

function Infos({ accountDetails }) {
  // Using a local for stocking account informations
  const [localAccountDetails, setLocalAccountDetails] = useState(accountDetails);

  // Updating local account informations when accountDetails change
  useEffect(() => {
    setLocalAccountDetails(accountDetails);
  }, [accountDetails]);

  return (
    <div>
      <h2 id="informations">Informations personnelles</h2>
      <div className="account">
        <p className="account-details">
          Email :
          {localAccountDetails.email}
        </p>
        <p className="account-details">
          Prénom :
          {localAccountDetails.firstname}
        </p>
        <p className="account-details">
          Nom :
          {localAccountDetails.lastname}
        </p>
        <p className="account-details">
          Date de naissance :
          {localAccountDetails.birthdate}
        </p>
        <p className="account-details">
          Adresse :
          {localAccountDetails.address}
        </p>
        <p className="account-details">
          Code postal :
          {localAccountDetails.zipcode}
        </p>
        <p className="account-details">
          Ville :
          {localAccountDetails.city}
        </p>
        <p className="account-details">
          Pays :
          {localAccountDetails.country}
        </p>
      </div>
    </div>
  );
}

export default Infos;
