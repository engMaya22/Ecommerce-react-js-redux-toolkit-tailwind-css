// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook
export const useAuthContext = () => useContext(AuthContext);//useAuthContext is used like useSelector

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const [isAuth ,setIsAuth] = useState(false);

  // Load from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Save user to localStorage
  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    // setIsAuth(true)

  };

  const loginUser = (values) => {
    // Normally, you'd validate, but here just set user
    saveUser({ name: "Test User", email: values.email }); // name can be from stored data
  };

  const registerUser = (values) => {
    saveUser({ name: values.name, email: values.email });
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    // setIsAuth(false)
  };

  return (
    <AuthContext.Provider value={{ user , loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
