import React from 'react';
import ReactDOM from 'react-dom/client';

// Import des fonctions pour création du routeur
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importation des composants
import App from './app';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Signup from './pages/Auth/Signup';
import Labels from './pages/Labels';
import Events from './pages/Events';
import Medias from './pages/Medias';
import Signin from './pages/Auth/Signin';

// Création du routeur
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/admin', element: <Admin /> },
      { path: '/contact', element: <Contact /> },
      { path: '/account', element: <Account /> },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <Signup /> },
      { path: '/labels', element: <Labels /> },
      { path: '/events', element: <Events /> },
      { path: '/medias', element: <Medias /> },
    ],
  },
]);

// RouterProvider permet à react-router-dom de checker les routes de notre application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
