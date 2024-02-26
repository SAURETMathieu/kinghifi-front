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
    <div className="account">
      <h2 id="informations">Informations personnelles</h2>
      <div className="account-details">
        <p>
          Email :
          {localAccountDetails.email}
        </p>
        <span>
          Nom :
          {localAccountDetails.firstname}
        </span>
        <span>
          Prénom :
          {localAccountDetails.lastname}
        </span>
        <p>
          Date de naissance :
          {localAccountDetails.birthdate}
        </p>
        <p>
          Adresse :
          {localAccountDetails.address}
        </p>
        <span>
          Code postal :
          {localAccountDetails.address}
        </span>
        <span>
          Ville :
          {localAccountDetails.city}
        </span>
        <p>
          Pays :
          {localAccountDetails.country}
        </p>
      </div>
    </div>
  );
}

export default Infos;
