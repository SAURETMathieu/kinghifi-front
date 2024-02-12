// import './index.css'
// import des icons
import NavBar from '../Navigation/NavBar';
import NavTop from '../Navigation/NavTop';


function Header() {

    return(
      <header className='header'>      
        <NavTop />
        <NavBar/>
      </header>
        
    )
    
}

export default Header;