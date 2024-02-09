// import './index.css'

import { NavLink } from "react-router-dom";

function Navfloat() {

    return(
        <>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/labels">Musiques</NavLink>
        <NavLink to="/events">Evènements</NavLink>
        <NavLink to="/medias">Médias</NavLink>
        </>
    )
    
}

export default Navfloat;