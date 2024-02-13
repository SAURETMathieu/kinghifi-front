// /* eslint-disable react/no-unescaped-entities */
// import './index.css'

// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";


// const Account = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
      
//       console.log('Email:', email);
//       console.log('Mot de passe:', password);
      
//       setEmail('');
//       setPassword('');
//     };

//   return (
      
//     <div className='form' >
                   
//         <form className="submit-form" onSubmit={handleSubmit} >
                              
//           <input 
//             className="input is-warning"
//             type="email"
//             name="email"
//             placeholder={"email"}
//             value={email}
//             onChange={handleEmailChange}
//             required />
      
//           <input 
//             className="input is-warning"
//             type="password"
//             name="password"
//             placeholder={"Mot de passe"}
//             value={password}
//             onChange={handlePasswordChange}
//             required />
          
//         <button className="button is-warning is-light"type="submit">Connexion</button>

//         <Link>Mot de passe oublié ?</Link>
//         <NavLink to='/signup'> S'inscrire</NavLink>
          
//     </form>
    
//     </div>
    
// )}

// export default Account;