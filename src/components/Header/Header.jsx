import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // Logout
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
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
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
            <div class="btn-group">
              <button
                class="btn btn-light btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                full name
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li class="dropdown-item">
                  <a class="dropdown-item" href="/">
                    {user.email}
                  </a>
                </li>
                <li class="dropdown-item">
                  <button class="dropdown-item" href="/" onClick={handleLogout}>
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
