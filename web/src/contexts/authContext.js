import React, { createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = {
    products: [],
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
