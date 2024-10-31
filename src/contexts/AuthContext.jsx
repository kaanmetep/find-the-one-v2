import { useState, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <AuthContext.Provider value={{ loginInput, handleLoginInput }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
