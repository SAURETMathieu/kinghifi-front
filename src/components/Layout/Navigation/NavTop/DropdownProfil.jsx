import './DropdownProfil.css';

import Dropdown from '/src/components/Common/Dropdown';

import { useState } from 'react';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

function DropdownProfil() {
  const [isUserLogged, setIsUserLogged] = useState(false);

 

  const loggedLinks = [
    { path: '/profil', label: 'Profil' },
    { path: '/infos', label: 'Mes informations' },
    { path: '/favorites', label: 'Mes favoris' },
    { path: '/messages', label: 'Mes messages' },
  ];

  const loggedOutLinks = [
    { path: '/signin', label: 'Se connecter' },
    { path: '/signup', label: 'S\'inscrire' },
  ];

  return (
    isUserLogged ? (
      <div className="navbar-top-icon">
        <Dropdown title="" icon={faUser}  links={loggedLinks} caret={false}/>
      </div>
    ) : (
      <div className="navbar-top-icon">
        <Dropdown title="" icon={faRightToBracket}  links={loggedOutLinks} caret={false}/>
      </div>
    )
  );
}

export default DropdownProfil;