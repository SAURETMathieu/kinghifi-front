import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

//Import des fonctions pour création du routeur
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Importation des composants
import App from './components/App'
import Home from './components/Home'
import Admin from './components/Admin';
import Contact from './components/Contact';
import Account from './components/Account';

//Création du routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {index:true , element:<Home />},
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
