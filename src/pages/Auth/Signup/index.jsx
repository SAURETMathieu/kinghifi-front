import './index.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchData from '../../../services/api/call.api';

function Singup() {
  const [formUserData, setFormUserData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
  });

  const initialFormUserData = {
    email: '',
    password: '',
    passwordConfirm: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUserData({ ...formUserData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchData('POST', 'auth/signup', formUserData);
      console.log(response);
      if (response === null || response.error) {
        console.log(response);
        return;
      }

      setFormUserData({ ...initialFormUserData });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log({ ...formUserData });

  // setFormUserData({ ...initialFormUserData });

  return (

    <form className="submit-form is-horizontal" onSubmit={handleSubmit}>

      <input
        className="input is-expanded is-warning"
        type="email"
        name="email"
        placeholder="Email"
        value={formUserData.email}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="text"
        name="lastname"
        placeholder="Nom"
        value={formUserData.lastname}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={formUserData.firstname}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="date"
        name="birthdate"
        placeholder="Date de naissance"
        value={formUserData.birthdate}
        onChange={handleChange}
      />

      <input
        className="input is-expanded is-warning"
        type="text"
        name="address"
        placeholder="Adresse"
        value={formUserData.address}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="text"
        name="zipcode"
        placeholder="Code postal"
        value={formUserData.zipcode}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="text"
        name="city"
        placeholder="Ville"
        value={formUserData.city}
        onChange={handleChange}
      />

      <input
        className="input is-normal is-warning"
        type="text"
        name="country"
        placeholder="Pays"
        value={formUserData.country}
        onChange={handleChange}
      />

      <input
        className="input is-expanded is-warning"
        type="text"
        name="password"
        placeholder="Mot de passe"
        value={formUserData.password}
        onChange={handleChange}
      />

      <input
        className="input is-expanded is-warning"
        type="text"
        name="passwordConfirm"
        placeholder="Confirmation du mot de passe"
        value={formUserData.passwordConfirm}
        onChange={handleChange}
      />

      <button className="button is-warning is-light" type="submit"> S&apos;inscrire </button>
      <NavLink to="/"> Retour </NavLink>

    </form>

  );
}

export default Singup;
