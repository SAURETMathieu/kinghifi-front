import { useEffect, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import checkAdminRole from '../../services/auth/checkAdmin';

import { UserContext } from '../../context/userContext';

function Admin() {
  const { isAdmin, setIsAdmin } = useContext(UserContext);
  const [isAdminChecked, setIsAdminChecked] = useState(false);

  useEffect(() => {
    const adminRole = checkAdminRole();
    setIsAdmin(adminRole);
    setIsAdminChecked(true);
  }, []);

  if (isAdminChecked && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  if (isAdminChecked && isAdmin) {
    return 'Admin';
  }
  return null;
}

export default Admin;
