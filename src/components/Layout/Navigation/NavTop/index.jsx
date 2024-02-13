import './index.css';
// import des icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import DropdownProfil from './DropdownProfil';

function NavTop() {
  return (
    <nav className="navbar-top">

      <div className="navbar-top__left">
        <NavLink to="/" className="nav-logo">
          <img className="logo" src="/images/KHF BANNER.jpg" alt="" />
        </NavLink>
      </div>

      <div className="navbar-top__right">
        <NavLink to="/admin" className="nav-icon">
          <FontAwesomeIcon icon={faLock} />
        </NavLink>
        <NavLink to="/contact" className="nav-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <div className="nav-icon">
          <DropdownProfil />
        </div>
      </div>

    </nav>

  );
}

export default NavTop;
