import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const validate = (values) => {
  let errors = [];

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) errors.password = "Password is required";

  return errors;
};

const login = (values) => {
  console.log(`run login with: ${values.email} ${values.password}`);
};

const SignIn = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <div className="img"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Sign In</h2>
          </div>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <input
              name="email"
              id="email"
              type="text"
              className={`form-control ${errors.email && "is-invalid"}`}
              value={values.email || ""}
              onChange={handleChange}
            />
            <label htmlFor="email" className="form-control-placeholder">
              Email
            </label>
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <input
              name="password"
              id="password"
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              value={values.password || ""}
              onChange={handleChange}
            />
            <label htmlFor="password" className="form-control-placeholder">
              Password
            </label>
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>
          <div className="form-group">
            <button className="form-control btn btn-primary rounded submit px-3">
              Sign In
            </button>
          </div>
          <div className="form-group text-center">
            <Link to="/auth/reset">Forgot Password</Link>
          </div>
        </form>
        <p className="text-center">
          Not a member? <Link to="/auth/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
