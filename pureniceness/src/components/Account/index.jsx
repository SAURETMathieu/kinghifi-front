/* eslint-disable react/no-unescaped-entities */
// import './index.css'

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";


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
      
    <div id="account" >
                   
        <form className="submit-form" onSubmit={handleSubmit} >
                              
          <input className='account-input'
              type="email"
              name="email"
              placeholder={"email"}
              value={email}
              onChange={handleEmailChange}
              required />
      
          <input className='account-input'
              type="password"
              name="password"
              placeholder={"Mot de passe"}
              value={password}
              onChange={handlePasswordChange}
              required />
          
        <button className="button"type="submit">Connexion</button>

        <Link>Mot de passe oublié ?</Link>
        <NavLink to='/signup'> S'inscrire</NavLink>
          
    </form>
    
    </div>
    
)}

export default Account;