import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to={"/auth"} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
