import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
