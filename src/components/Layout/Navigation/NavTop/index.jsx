import './index.css';
// import des icons
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import DropdownProfil from './DropdownProfil';

function NavTop() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const checkAdminRole = () => {
    const token = localStorage.getItem('authApiToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.role === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    checkAdminRole();
  }, [location.pathname]);

  useEffect(() => {
  }, [isAdmin]);

  return (
    <nav className="navbar-top">

      <div className="navbar-top__left">
        <NavLink to="/" className="nav-logo">
          <img className="logo" src="/images/KHF BANNER.jpg" alt="" />
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
