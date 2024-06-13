import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const navigate = useNavigate();

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
    startTokenTime();
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  const startTokenTime = () => {
    const expiryTime = 1 * 60 * 1000;
    setTimeout(logout, expiryTime);
  };

  useEffect(() => {
    if (token) {
      startTokenTime();
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
