import './index.css'
// import des icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope,faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";
import DropdownMenuUser from '../../Account/DropdownMenuUser';

function NavTop() {

    return(
      
      <div className='navbar-top'>

        <NavLink to='/'>
          <img className='logo'src='../public/KHF BANNER.jpg' />
        </NavLink>

        <NavLink to='/admin' className='nav-icon'>
          <FontAwesomeIcon icon={faLock} />
        </NavLink>

        <NavLink to='/contact' className='nav-icon'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink to='/account' className='nav-icon'>
          <FontAwesomeIcon icon={faFolderOpen} />
          <DropdownMenuUser/>
        </NavLink>

      </div>


)
    
}

export default NavTop;