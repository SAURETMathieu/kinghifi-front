import './assets/styles/reset.css';
import './assets/styles/global.css';

import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}

export default App;
