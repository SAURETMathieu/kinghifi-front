import './index.css'
// import des icons
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen ,faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";
import DropdownMenuUser from '../../Account/DropdownMenuUser';

function NavTop() {
  const [isUserLogged, setIsUserLogged] = useState(true);

  const toggleUserLogged = () => {
    setIsUserLogged(!isUserLogged)
  };

    return(
      <div className='navbar'>

        <NavLink to='/' className='nav-logo'>
          <img className='logo'src='../public/KHF BANNER.jpg' />
        </NavLink>

        <NavLink to='/admin' className='nav-icon'>
          <FontAwesomeIcon icon={faLock} />
        </NavLink>

        <NavLink to='/contact' className='nav-icon'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink to='/account' 
        className='nav-icon'
        onClick={toggleUserLogged}>
          
          {isUserLogged ? (<DropdownMenuUser/>) : (<FontAwesomeIcon icon={faDoorOpen} />)}
          
        </NavLink>
        </div>

)
    
}

export default NavTop;