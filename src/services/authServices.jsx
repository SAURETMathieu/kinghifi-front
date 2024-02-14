import { jwtDecode } from 'jwt-decode';

const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

const logout = () => {
  localStorage.removeItem('authToken');
};

const isLogged = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const decodeToken = (token) => {
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }
  return false;
};

const authServices = {
  saveToken,
  logout,
  isLogged,
  decodeToken,
};

export default authServices;
