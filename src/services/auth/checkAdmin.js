import { jwtDecode } from 'jwt-decode';

function checkAdminRole() {
  const token = localStorage.getItem('authApiToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken && decodedToken.role === 'admin') {
      return true;
    }
    return false;
  }
  return false;
}

export default checkAdminRole;
