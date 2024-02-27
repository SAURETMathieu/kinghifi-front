import React, {
  createContext, useEffect, useState, useContext,
} from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const userValues = { isAdmin, setIsAdmin, isConnected, setIsConnected };

  return (
    <UserContext.Provider value={userValues}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
