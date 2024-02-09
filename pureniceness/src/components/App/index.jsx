import './index.css'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer'
import Navfloat from './Navfloat'


function App() {
 
  return (
    <div className='app'>

     <Header />
     <Navfloat/>
     <Outlet />
     <Footer/>
    
    </div>
  )
}

export default App
