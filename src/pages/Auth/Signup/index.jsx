import './index.css';

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import fetchData from '../../../services/api/call.api';
// eslint-disable-next-line import/order
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUserData({ ...formUserData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const notify = () => toast('Wow so easy!');
    try {
      const response = await fetchData('POST', 'auth/signup', formUserData);

      if (response === null || response.error) {
        throw new Error('Une erreur s\'est produite !');
      }
      toast.success('Inscription réussi !', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
      setFormUserData({ ...initialFormUserData });

      setTimeout(() => {
        navigate('/signin');
      }, 5500);
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,

      });
    }
  };

  return (
    <>
      <div>

        <ToastContainer />
      </div>

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
        <NavLink to="/"> Retour </NavLink>

      </form>
    </>
  );
}

export default Singup;
