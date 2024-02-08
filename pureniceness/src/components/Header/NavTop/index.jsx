import './index.css'
// import des icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

function NavTop() {

    return(
      <>
      <nav className='navbar-top'>

        <NavLink to='/'>
          <img className='logo'src='../public/KHF BANNER.jpg' />
        </NavLink>

        <NavLink to='/admin'>
          <FontAwesomeIcon icon={faLock} />
        </NavLink>

        <NavLink to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink to='/account'>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <FontAwesomeIcon icon={faUser} aria-haspopup="true" aria-controls="dropdown-menu4"/>
            </div>

            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <NavLink to='/info perso'>Info personnelle</NavLink>
                  <NavLink to='/favorites'>Favoris</NavLink>
                  <NavLink to='/signout'>Se déconnecter</NavLink>
                </div>
              </div>
            </div>
            
          </div>
        </NavLink>

      </nav>

</>
)
    
}

export default NavTop;