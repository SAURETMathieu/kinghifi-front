import './index.css'

import { NavLink } from "react-router-dom";

function Navfloat() {

    return(
        <>
        <div className="navfloat">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/labels">Musiques</NavLink>
        <NavLink to="/events">Evènements</NavLink>
        <NavLink to="/medias">Médias</NavLink>
        </div>
        </>
    )
    
}

export default Navfloat;