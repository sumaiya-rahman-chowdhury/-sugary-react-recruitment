import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ element }) => {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
