import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="img-reg"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Register</h2>
          </div>
        </div>
        <form className="signin-form">
          <div className="form-group mt-3">
            <input type="text" className="form-control" required />
            <label htmlFor="name" className="form-control-placeholder">
              Full name
            </label>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" required />
            <label htmlFor="email" className="form-control-placeholder">
              Email
            </label>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" required />
            <label htmlFor="password" className="form-control-placeholder">
              Password
            </label>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" required />
            <label
              htmlFor="confirm_password"
              className="form-control-placeholder"
            >
              Confirm Password
            </label>
          </div>
          <div className="form-group">
            <button className="form-control btn btn-primary rounded submit px-3">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center">
          Already member. <Link to="/auth">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
