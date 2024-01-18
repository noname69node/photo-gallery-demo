import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";
import { useUserAuth } from "../context/UserAuthContext";

const AuthLayout = () => {
  // const [user, loading, error] = useAuthState(auth);
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    return;
  }, [user]);

  return (
    <section className="auth vh-100 d-flex align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
