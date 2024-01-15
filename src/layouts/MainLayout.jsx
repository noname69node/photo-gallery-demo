import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div>MainLayout</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/auth">Login</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
