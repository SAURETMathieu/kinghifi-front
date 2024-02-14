import './index.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ ...formUserData });

    setFormUserData({ ...initialFormUserData });
  };

  return (

    <form className="submit-form is-horizontal" onSubmit={handleSubmit}>

      <input
        className="input is-expanded is-warning"
        type="text"
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
        type="text"
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
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formUserData.password}
        onChange={handleChange}
      />

      <input
        className="input is-expanded is-warning"
        type="password"
        name="passwordConfirm"
        placeholder="Confirmation du mot de passe"
        value={formUserData.passwordConfirm}
        onChange={handleChange}
      />

      <button className="button is-warning is-light" type="submit"> S&apos;inscrire </button>
      <NavLink to="/account"> Retour </NavLink>

    </form>

  );
}

export default Singup;
