import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function NavigateAdmin() {
  return (
    <nav className={styles.navbar}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/admin/users" className="nav-link">
            <div className="nav-link-content">Utilisateurs</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/artists" className="nav-link">
            <div className="nav-link-content">Artistes</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/labels" className="nav-link">
            <div className="nav-link-content">Labels</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/albums" className="nav-link">
            <div className="nav-link-content">Albums</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/tracks" className="nav-link">
            <div className="nav-link-content">Sons</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/events" className="nav-link">
            <div className="nav-link-content">Events</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/medias" className="nav-link">
            <div className="nav-link-content">Médias</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/messages" className="nav-link">
            <div className="nav-link-content">Messages</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/settings" className="nav-link">
            <div className="nav-link-content">Paramètres</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigateAdmin;
