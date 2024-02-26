import './index.css';
// import des icons
import { useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import DropdownProfil from './DropdownProfil';
import checkAdminRole from '../../../../services/auth/checkAdmin';
import { UserContext } from '../../../../context/userContext';

function NavTop() {
  const { isAdmin, setIsAdmin } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    setIsAdmin(checkAdminRole());
  }, [location.pathname]);

  return (
    <nav className="navbar-top">

      <div className="navbar-top__left">
        <NavLink to="/" className="nav-logo">
          <img className="logo" src="/images/banner_khf.jpg" alt="" />
        </NavLink>
      </div>

      <div className="navbar-top__right">
        {isAdmin && (
        <NavLink to="/admin" className="nav-icon">
          <FontAwesomeIcon icon={faLock} />
        </NavLink>
        )}
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
