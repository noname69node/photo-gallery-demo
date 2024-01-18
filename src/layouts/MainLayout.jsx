import { signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
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
