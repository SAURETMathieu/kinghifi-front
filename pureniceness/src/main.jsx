import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

//Import des fonctions pour création du routeur
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Importation des composants
import Home from './components/App/index.jsx'
import Admin from './components/Admin/index.jsx';
import Contact from './components/Contact/index.jsx';
import Account from './components/Account/index.jsx';

//Création du routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        { path: "/admin", element: <Admin /> },
        { path: "/contact", element: <Contact /> },
        { path: "/account", element: <Account /> },
    ],
  },
]);

//MRouterProvider permet à react-router-dom de checker les routes de notre application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
