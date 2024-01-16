import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
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
