// import './index.css'

import { useState } from "react";

const Account = () => {

    // const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const toggleAccount = () => {
    //   setIsAccountOpen(!isAccountOpen)
    // };
  
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
              id="email"
              placeholder={"email"}
              value={email}
              onChange={handleEmailChange}
              required />
      
          <input className='account-input'
              type="password"
              id="password"
              placeholder={"Mot de passe"}
              value={password}
              onChange={handlePasswordChange}
              required />
          
        <button className="button"type="submit">Se connecter</button>
          
    </form>
    
    </div>
    
)}

export default Account;