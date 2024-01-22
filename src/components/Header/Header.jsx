import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../config/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { user, userInfo, setIsLogged } = useUserAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);
        navigate("/auth");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Holliday Photos
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="btn-group">
              <button
                className="btn btn-light btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo.fullname && userInfo.fullname}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item">
                  <Link className="dropdown-item" to="/profile">
                    {user.email && user.email}
                  </Link>
                </li>
                <li className="dropdown-item">
                  <button
                    className="dropdown-item"
                    href="/"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
