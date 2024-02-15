import React, {
  createContext, useEffect, useState, useContext,
} from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const isAdminValues = { isAdmin, setIsAdmin };

  return (
    <UserContext.Provider value={isAdminValues}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
