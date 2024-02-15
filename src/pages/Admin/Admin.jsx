import { useEffect, useContext, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import checkAdminRole from '../../services/auth/checkAdmin';
import { UserContext } from '../../context/userContext';
import NavigateAdmin from './Navbar/Navbar';

function Admin() {
  const { isAdmin, setIsAdmin } = useContext(UserContext);
  const [isAdminChecked, setIsAdminChecked] = useState(false);

  useEffect(() => {
    const adminRole = checkAdminRole();
    setIsAdmin(adminRole);
    setIsAdminChecked(true);
  }, [setIsAdmin]);

  if (isAdminChecked && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  if (isAdminChecked && isAdmin) {
    return (
      <>
        <NavigateAdmin />
        <Outlet />
      </>
    );
  }
  return null;
}

export default Admin;
