import './index.css'
import { Outlet } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'


function Home() {
 

  return (
    <div className='App'>

     <Header />
     <Outlet />
     <Footer/>
    
    </div>
  )
}

export default Home
