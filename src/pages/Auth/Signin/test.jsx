import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Jwt } from 'jsonwebtoken';

function Test() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Récupérer le token du localStorage (ou de tout autre endroit où vous l'avez stocké)
    const storedToken = localStorage.getItem('authApiToken');
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log('Informations du token :', decodedToken);
      try {
        const verifiedToken = jwt.verify(token, `${import.meta.env.JWT_SECRET}`);
        console.log('Token vérifié :', verifiedToken);
      } catch (error) {
        console.error('Erreur lors de la vérification du token :', error.message);
      }
    }
  }, [token]);

  return (
    <div>
      <h1>Application React</h1>
    </div>
  );
}

export default Test;
