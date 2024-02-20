/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import Infos from './Infos';
import Favorites from './Favorites';

function Account() {
  return (
    <div className="profil">
      <div className="profil-container">
        <div className="return-icon">
          <NavLink to="/">
            <FontAwesomeIcon icon={faReply} />
          </NavLink>
        </div>
        <h1>PROFIL</h1>
        <div className="profil-icons">
          <a href="#informations">
            <FontAwesomeIcon icon={faUser} />
            Mes informations
          </a>
          <a href="#favorites">
            <FontAwesomeIcon icon={faStar} />
            Mes favoris
          </a>
        </div>
      </div>
      <div>
        <Infos />
      </div>
      <div className="favorite-icon">
        <h2 id="favorites">Favoris</h2>
      </div>
      <div>
        <Favorites />
      </div>
    </div>
  );
}

export default Account;
