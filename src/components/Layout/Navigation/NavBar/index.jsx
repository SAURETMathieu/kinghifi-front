import './index.css';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faImage } from '@fortawesome/free-solid-svg-icons';
import DropdownLabels from './DropdownLabels';

function NavBar() {
  return (
    <nav className="navbar-main">
      <NavLink to="/">
        <span className="navbar-text">Accueil</span>
        <FontAwesomeIcon className="navbar-icon" icon={faHouse} />
      </NavLink>
      <div className="nav-icon">
        <DropdownLabels />
      </div>
      <NavLink to="/events">
        <span className="navbar-text">Evénements</span>
        <FontAwesomeIcon className="navbar-icon" icon={faCalendarDays} />
      </NavLink>
      <NavLink to="/medias">
        <span className="navbar-text">Médias</span>
        <FontAwesomeIcon className="navbar-icon" icon={faImage} />
      </NavLink>
    </nav>
  );
}

export default NavBar;
