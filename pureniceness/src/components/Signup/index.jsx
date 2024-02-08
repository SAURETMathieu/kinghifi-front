// import './index.css'

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Singup() {
   
    const [formUserData, setFormUserData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        firstname: '',
        lastname: '',
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
        firstname: '',
        lastname: '',
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
      
      console.log({ ...formUserData});
            
      setFormUserData({ ...initialFormUserData });
    };

    return (
      <div className='singup'>

         <form className="submit-form" onSubmit={handleSubmit} >
                              
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            value={formUserData.email} 
            onChange={handleChange} />

          <input 
            type="password" 
            name="password" 
            placeholder="Mot de passe" 
            value={formUserData.password} 
            onChange={handleChange} />

          <input 
            type="password" 
            name="passwordConfirm" 
            placeholder="Confirmation du mot de passe" 
            value={formUserData.passwordConfirm} 
            onChange={handleChange} />
      
          <input 
            type="text" 
            name="firstname" 
            placeholder="Prénom" 
            value={formUserData.firstname} 
            onChange={handleChange} />

          <input 
            type="text" 
            name="lastname" 
            placeholder="Nom de famille" 
            value={formUserData.lastname} 
            onChange={handleChange} />

          <input 
            type="text" 
            name="birthdate" 
            placeholder="Date de naissance" 
            value={formUserData.birthdate} 
            onChange={handleChange} />

          <input 
            type="text" 
            name="address" 
            placeholder="Adresse" 
            value={formUserData.address} 
            onChange={handleChange} />

          <input 
            type="text" 
            name="zipcode" 
            placeholder="Code postal" 
            value={formUserData.zipcode} 
            onChange={handleChange} />
          
          <input 
            type="text" 
            name="city" 
            placeholder="Ville" 
            value={formUserData.city} 
            onChange={handleChange} />

          <input 
            type="text" 
            name="country" 
            placeholder="Pays" 
            value={formUserData.country} 
            onChange={handleChange} />

        <button type="submit"> S'inscrire </button>
        <NavLink to='/account'> Retour </NavLink>
        
      </form>
                          
      </div>
    )
  }
  


export default Singup;