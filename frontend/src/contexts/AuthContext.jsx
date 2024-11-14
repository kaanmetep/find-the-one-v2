import { useState, createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const decodeJWT = () => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) return null;
      return jwtDecode(token).id;
    } catch (error) {
      console.error("Token decode error:", error);
      return null;
    }
  };

  const login = (userData) => {
    localStorage.setItem("jwt", JSON.stringify(userData));
    setUserId(decodeJWT());
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem("jwt");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decoded = decodeJWT();
      if (decoded) {
        setUserId(decoded);
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userId, login, logout, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
