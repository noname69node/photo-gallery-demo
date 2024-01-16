import React from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="login-wrap p-4 p-md-5">
      <div className="d-flex">
        <div className="w-100">
          <h2 className="text-center">Forgot your password</h2>
        </div>
      </div>
      <form className="signin-form">
        <div className="form-group text-center">
          <p>Please enter your email address </p>
        </div>
        <div className="form-group mt-3">
          <input type="text" className="form-control" required />
          <label htmlFor="email" className="form-control-placeholder">
            Email
          </label>
        </div>

        <div className="form-group">
          <button className="form-control btn btn-primary rounded submit px-3">
            Reset Password
          </button>
        </div>
      </form>
      <p className="text-center">
        Already member. <Link to="/auth">Sign Up</Link>
      </p>
    </div>
  );
};

export default Reset;
