import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useUserAuth();
  if (!isLogged) {
    return <Navigate to={"/auth"} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
