import './index.css'
// import des icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

function Header() {


    return(
      <header className='header'>

        <NavLink to='/'>
          <img src='../public/KHF BANNER.jpg' />
        </NavLink>

        <NavLink to='/admin'>
          <FontAwesomeIcon icon={faLock} />
        </NavLink>

        <NavLink to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink to='/account' >
          <FontAwesomeIcon icon={faUser}/>
        </NavLink>
      
      </header>
        
    )
    
}

export default Header;