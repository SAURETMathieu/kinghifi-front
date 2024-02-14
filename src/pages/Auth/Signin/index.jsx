/* eslint-disable react/no-unescaped-entities */
import './index.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Account() {
  const [email, setEmail] = useState('testt@test.fr');
  const [password, setPassword] = useState('12341234');

  const postAuth = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        return data.error;
      }

      localStorage.setItem('authApiToken', data.token);

      return window.location.href('/');
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authApiToken');
    if (token) {
      window.location.href = '/';
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postAuth();
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="header-connexion">
        <Link to="/" className="return-link">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>Connexion</h1>
      </div>

      <form className="submit-form" onSubmit={handleSubmit}>

        <input
          className="input is-warning"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <input
          className="input is-warning"
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button className="button is-warning is-light" type="submit">Connexion</button>

      </form>

      <div className="links-container">
        <Link className="link" to="/recover">Mot de passe oublié ?</Link>
        <Link className="link" to="/signup"> S'inscrire</Link>
      </div>

    </>
  );
}

export default Account;
