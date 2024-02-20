/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import fetchData from '../../../services/api/call.api';

function Infos() {
  const token = localStorage.getItem('authApiToken');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;
  const [accountDetails, setAccountDetails] = useState([]);

  const fetchAccountData = async (id) => {
    const fetchedData = await fetchData('GET', `users/${id}`, null, true);
    const accountData = fetchedData[0];
    setAccountDetails(accountData);
  };

  useEffect(() => {
    fetchAccountData(userId);
  }, [userId]);

  return (
    <div className="account">
      <h2 id="informations">Informations personnelles</h2>
      <div className="account-details">
        <p>
          Email :
          {accountDetails.email}
        </p>
        <span>
          Nom :
          {accountDetails.firstname}
        </span>
        <span>
          Prénom :
          {accountDetails.lastname}
        </span>
        <p>
          Date de naissance :
          {accountDetails.birthdate ? accountDetails.birthdate.substring(0, 10) : 'erreur de données'}
        </p>
        <p>
          Adresse :
          {accountDetails.address}
        </p>
        <span>
          Code postal :
          {accountDetails.zipcode}
        </span>
        <span>
          Ville :
          {accountDetails.city}
        </span>
        <p>
          Pays :
          {accountDetails.country}
        </p>
      </div>
    </div>
  );
}

export default Infos;
