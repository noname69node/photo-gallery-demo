import { signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div>MainLayout</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/auth">Login</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
