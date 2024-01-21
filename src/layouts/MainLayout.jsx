import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { isLogged } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/auth");
    }
  }, [isLogged]);

  return (
    <>
      {isLogged && <Header />}
      {isLogged && <Outlet />}
    </>
  );
};

export default MainLayout;
