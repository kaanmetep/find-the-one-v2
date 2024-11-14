import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (!isLoading) {
    return isAuthenticated ? children : <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
