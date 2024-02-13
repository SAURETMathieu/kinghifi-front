/* eslint-disable react/no-unescaped-entities */
import './index.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Account = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log('Email:', email);
      console.log('Mot de passe:', password);
      
      setEmail('');
      setPassword('');
    };

  return (       
    <>
      <div className="header-connexion">
        <Link to='/' className="return-link">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>Connexion</h1>
      </div>
      
      <form className="submit-form" onSubmit={handleSubmit} >
                            
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
          <Link className="link" to='/recover'>Mot de passe oublié ?</Link>
          <Link className="link" to='/signup'> S'inscrire</Link> 
        </div>
        
      
    </>
)}

export default Account;