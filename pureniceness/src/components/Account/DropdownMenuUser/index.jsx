// import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";


function DropdownMenuUser() {

    return(
        <div className="dropdown is-hoverable is-right">
          
          <div className="dropdown-trigger">
          <FontAwesomeIcon icon={faUser} aria-haspopup="true" aria-controls="dropdown-menu4"/>
          </div>

          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content" >
              <div className="dropdown-item">
                <NavLink to='/info perso'>Info personnelle</NavLink>
                <NavLink to='/favorites'>Favoris</NavLink>
                <NavLink to='/signout'>Se déconnecter</NavLink>
            </div>
          </div>
        </div>
        
      </div>)
    
}

export default DropdownMenuUser;