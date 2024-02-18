import { jwtDecode } from 'jwt-decode';

function checkConnected() {
  const token = localStorage.getItem('authApiToken');
  if (token) {
      return true;
  }
  return false;
}

export default checkConnected;