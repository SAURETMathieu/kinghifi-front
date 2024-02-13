/* eslint-disable react/no-unescaped-entities */
import './index.css';

// import jwt from 'jsonwebtoken';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');

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
      // const token = localStorage.getItem('authApiToken');
      // console.log(token);

      // jwt.verify(token, `${import.meta.env.JWT_SECRET}`, async (err, user) => {
      //   // Get the current timestamp in seconds to compare with token expiration
      //   const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

      //   if (user.exp < currentTimestampInSeconds) {
      //     console.log('expiré');
      //   }
      //   console.log(user);
      // });
      return data.token;
    } catch (error) {
      return error;
    }
  };

  // useEffect(() => {
  //   // Récupérer le token du localStorage (ou de tout autre endroit où vous l'avez stocké)
  //   const storedToken = localStorage.getItem('authApiToken');
  //   console.log(storedToken);
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     console.log('Informations du token :', decodedToken);
  //     try {
  //       const verifiedToken = jwt.verify(token, `${import.meta.env.JWT_SECRET}`);
  //       console.log('Token vérifié :', verifiedToken);
  //     } catch (error) {
  //       console.error('Erreur lors de la vérification du token :', error.message);
  //     }
  //   }
  // }, [token]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestMessage = postAuth();

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
