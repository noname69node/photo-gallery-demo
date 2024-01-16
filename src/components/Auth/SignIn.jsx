import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="auth">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="img"></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h2 className="text-center">Sign In</h2>
                  </div>
                </div>
                <form className="signin-form">
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" required />
                    <label htmlFor="email" className="form-control-placeholder">
                      Email
                    </label>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" required />
                    <label
                      htmlFor="password"
                      className="form-control-placeholder"
                    >
                      Password
                    </label>
                  </div>
                  <div className="form-group">
                    <button className="form-control btn btn-primary rounded submit px-3">
                      Sign In
                    </button>
                  </div>
                  <div className="form-group">
                    <Link to="/auth/reset">Forgot Password</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
